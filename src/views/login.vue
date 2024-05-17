<route lang="yaml">
  meta:
    whiteList: true
    title: 登录
    constant: true
    layout: false
  </route>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Copyright from '@/layouts/components/Copyright/index.vue'
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'
import storage from '@/utils/storage'

defineOptions({
  name: 'Login',
})

const route = useRoute()
const router = useRouter()

const settingsStore = useSettingsStore()
const userStore = useUserStore()

const { t } = useI18n()

const banner = new URL('../assets/images/login-banner.png', import.meta.url).href
const logo = new URL('../assets/images/logo.png', import.meta.url).href
const title = import.meta.env.VITE_APP_TITLE

// 表单类型，login 登录，register 注册，reset 重置密码
const formType = ref('login')
const loading = ref(false)
const redirect = ref(route.query.redirect?.toString() ?? settingsStore.settings.home.fullPath)

// 登录
const loginFormRef = ref<FormInstance>()
const loginForm = ref({
  account: storage.local.get('login_account') || '',
  password: '',
  remember: storage.local.has('login_account'),
})
const loginRules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
})
function handleLogin() {
  loginFormRef.value && loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      userStore.login(loginForm.value).then(() => {
        loading.value = false
        if (loginForm.value.remember) {
          storage.local.set('login_account', loginForm.value.account)
        }
        else {
          storage.local.remove('login_account')
        }
        router.push(redirect.value)
      }).catch(() => {
        loading.value = false
      })
    }
  })
}
</script>

<template>
  <div>
    <div class="bg-banner" />
    <I18nSelector placement="bottom-end" class="i18n-selector">
      <SvgIcon name="i-ri:translate" />
    </I18nSelector>
    <div id="login-box">
      <div class="login-banner">
        <img :src="logo" class="logo">
        <img :src="banner" class="banner">
      </div>
      <ElForm v-show="formType === 'login'" ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
        <div class="title-container">
          <h3 class="title">
            欢迎来到 {{ title }} ! 👋🏻
          </h3>
        </div>
        <div>
          <ElFormItem prop="account">
            <ElInput v-model="loginForm.account" :placeholder="t('app.account')" type="text" tabindex="1">
              <template #prefix>
                <SvgIcon name="i-ri:user-3-fill" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="password">
            <ElInput v-model="loginForm.password" type="password" :placeholder="t('app.password')" tabindex="2" autocomplete="new-password" show-password @keyup.enter="handleLogin">
              <template #prefix>
                <SvgIcon name="i-ri:lock-2-fill" />
              </template>
            </ElInput>
          </ElFormItem>
        </div>
        <div class="flex-bar">
          <ElCheckbox v-model="loginForm.remember">
            记住我
          </ElCheckbox>
        </div>
        <ElButton :loading="loading" type="primary" size="large" style="width: 100%;" @click.prevent="handleLogin">
          {{ t('app.login') }}
        </ElButton>
      </ElForm>
    </div>
    <Copyright />
  </div>
</template>

  <style lang="scss" scoped>
  [data-mode="mobile"] {
    #login-box {
      position: relative;
      top: inherit;
      left: inherit;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      height: 100%;
      border-radius: 0;
      box-shadow: none;
      transform: translateX(0) translateY(0);

      .login-banner {
        width: 100%;
        padding: 20px 0;

        .banner {
          position: relative;
          top: inherit;
          right: inherit;
          display: inherit;
          width: 100%;
          max-width: 375px;
          margin: 0 auto;
          transform: translateY(0);
        }
      }

      .login-form {
        width: 100%;
        min-height: auto;
        padding: 30px;
      }
    }

    .copyright {
      position: relative;
    }

    .login-switcher {
      display: none;
    }
  }

  :deep(input[type="password"]::-ms-reveal) {
    display: none;
  }

  :deep(.i18n-selector) {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    font-size: 18px;
    color: var(--el-text-color-primary);
    cursor: pointer;
  }

  .bg-banner {
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, var(--g-container-bg), var(--g-bg));
  }

  #login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background-color: var(--g-container-bg);
    border-radius: 10px;
    box-shadow: var(--el-box-shadow);
    transform: translateX(-50%) translateY(-50%);

    .login-banner {
      position: relative;
      width: 450px;
      overflow: hidden;
      background-color: var(--g-bg);

      .banner {
        width: 100%;

        @include position-center(y);
      }

      .logo {
        position: absolute;
        top: 20px;
        left: 20px;
        height: 30px;
        border-radius: 4px;
        box-shadow: var(--el-box-shadow-light);
      }
    }

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      min-height: 500px;
      padding: 50px;
      overflow: hidden;

      .title-container {
        position: relative;

        .title {
          margin: 0 auto 30px;
          font-size: 1.3em;
          font-weight: bold;
          color: var(--el-text-color-primary);
        }
      }
    }

    .el-form-item {
      margin-bottom: 24px;

      :deep(.el-input) {
        width: 100%;
        height: 48px;
        line-height: inherit;

        input {
          height: 48px;
        }

        .el-input__prefix,
        .el-input__suffix {
          display: flex;
          align-items: center;
        }

        .el-input__prefix {
          left: 10px;
        }

        .el-input__suffix {
          right: 10px;
        }
      }
    }

    :deep(.el-divider__text) {
      background-color: var(--g-container-bg);
    }

    .flex-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .sub-link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      font-size: 14px;
      color: var(--el-text-color-secondary);

      .text {
        margin-inline-end: 10px;
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    margin: 0;
  }

  .login-switcher {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  </style>
