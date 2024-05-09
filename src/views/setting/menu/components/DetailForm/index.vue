<route lang="yaml">
  meta:
    enabled: false
  </route>

<script setup lang="ts">
import Sortable from 'sortablejs'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiMenu from '@/api/modules/menu'
import useSettingsStore from '@/store/modules/settings'
import useTabbar from '@/utils/composables/useTabbar'

defineOptions({
  name: 'PagesExampleMenuDetail',
})

const props = defineProps(['id', 'parentId'])
const route = useRoute()
const router = useRouter()
const tabbar = useTabbar()

const settingsStore = useSettingsStore()

const loading = ref(false)
const formRef = ref<FormInstance>()
const showParent = ref(false) // 是否显示父级id
const list = ref(false) // 导航列表
const form = ref({
  id: props.id ?? '',
  parentId: props.parentId ?? '',
  path: '',
  redirect: '',
  name: '',
  component: '',
  sort: '',
  grade: '',
  navigation: '',
  meta: {
    title: '',
    icon: '',
    activeIcon: '',
    defaultOpened: false,
    alwaysOpened: false,
    permanent: false,
    auth: [] as string[],
    auths: [] as {
      name: string
      value: string
    }[],
    menu: true,
    breadcrumb: true,
    activeMenu: '',
    cache: [] as string[] | boolean,
    noCache: [] as string[],
    badge: '',
    newWindow: false,
    link: '',
    iframe: '',
    copyright: false,
    paddingBottom: '0px',
  },
})
const formRules = ref<FormRules>({
  'path': [
    { required: true, message: '请输入路由地址', trigger: 'blur' },
  ],
  'meta.title': [
    { required: true, message: '请输入显示名称', trigger: 'blur' },
  ],
})

onMounted(() => {
  apiMenu.list().then((res: any) => {
    list.value = res.data
  })
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  // 通过id请求获取parentId 编辑时请求 添加时不需要
  // id存在请求接口 不存为添加
  if (form.value.id) {
    apiMenu.detail(form.value.id).then((res: any) => {
      loading.value = false
      form.value.id = res.data.id
      form.value.parentId = res.data.parentId
      form.value.path = res.data.path
      form.value.redirect = res.data.redirect
      form.value.name = res.data.name
      form.value.component = res.data.component
      Object.assign(form.value.meta, res.data.meta)
    })
  }
}

// 鉴权标识
const inputAuth = ref('')
const inputAuthVisible = ref(false)
const InputAuthRef = ref()
function onInputAuthClose(tag: string) {
  form.value.meta.auth.splice(form.value.meta.auth.indexOf(tag), 1)
}
function onInputAuthShow() {
  inputAuthVisible.value = true
  nextTick(() => {
    InputAuthRef.value!.input!.focus()
  })
}
function onInputAuthConfirm() {
  if (inputAuth.value) {
    if (!form.value.meta.auth.includes(inputAuth.value)) {
      form.value.meta.auth.push(inputAuth.value)
    }
    else {
      ElMessage.warning('标识已存在')
    }
  }
  inputAuthVisible.value = false
  inputAuth.value = ''
}

// 缓存规则
const inputCache = ref('')
const inputCacheVisible = ref(false)
const InputCacheRef = ref()
function onInputCacheClose(tag: string) {
  typeof form.value.meta.cache === 'object' && form.value.meta.cache.splice(form.value.meta.cache.indexOf(tag), 1)
}
function onInputCacheShow() {
  inputCacheVisible.value = true
  nextTick(() => {
    InputCacheRef.value!.input!.focus()
  })
}
function onInputCacheConfirm() {
  if (inputCache.value && typeof form.value.meta.cache === 'object') {
    if (!form.value.meta.cache.includes(inputCache.value)) {
      form.value.meta.cache.push(inputCache.value)
    }
    else {
      ElMessage.warning('规则已存在')
    }
  }
  inputCacheVisible.value = false
  inputCache.value = ''
}

// 不缓存规则
const inputNoCache = ref('')
const inputNoCacheVisible = ref(false)
const InputNoCacheRef = ref()
function onInputNoCacheClose(tag: string) {
  form.value.meta.noCache.splice(form.value.meta.noCache.indexOf(tag), 1)
}
function onInputNoCacheShow() {
  inputNoCacheVisible.value = true
  nextTick(() => {
    InputNoCacheRef.value!.input!.focus()
  })
}
function onInputNoCacheConfirm() {
  if (inputNoCache.value) {
    if (!form.value.meta.noCache.includes(inputNoCache.value)) {
      form.value.meta.noCache.push(inputNoCache.value)
    }
    else {
      ElMessage.warning('规则已存在')
    }
  }
  inputNoCacheVisible.value = false
  inputNoCache.value = ''
}

const authsTableRef = ref()
const authsTableKey = ref(0)
onMounted(() => {
  onAuthDarg()
  // 第一次进入时id和parentid都为空时 显示父级id
  showParent.value = !!(!form.value.id && !form.value.parentId)
})
function onAuthAdd() {
  form.value.meta.auths.push({
    name: '',
    value: '',
  })
  nextTick(() => {
    authsTableRef.value.setScrollTop(form.value.meta.auths.length * 50)
  })
}
function onAuthDelete(index: number) {
  form.value.meta.auths.splice(index, 1)
}
function onAuthDarg() {
  const tbody = authsTableRef.value.$el.querySelector('.el-table__body-wrapper tbody')
  Sortable.create(tbody, {
    handle: '.sortable',
    animation: 300,
    ghostClass: 'ghost',
    onEnd: ({ newIndex, oldIndex }) => {
      if (newIndex === undefined || oldIndex === undefined) {
        return
      }
      const currRow = form.value.meta.auths.splice(oldIndex, 1)[0]
      form.value.meta.auths.splice(newIndex, 0, currRow)
      authsTableKey.value += 1
      nextTick(() => onAuthDarg())
    },
  })
}

function onSubmit() {
  if (form.value.id === '') {
    formRef.value && formRef.value.validate((valid) => {
      if (valid) {
        apiMenu.create(form.value).then(() => {
          ElMessage.success({
            message: '模拟新增成功',
            center: true,
          })
          goBack()
        })
      }
    })
  }
  else {
    formRef.value && formRef.value.validate((valid) => {
      if (valid) {
        apiMenu.edit(form.value).then(() => {
          ElMessage.success({
            message: '模拟编辑成功',
            center: true,
          })
          goBack()
        })
      }
    })
  }
}

function onCancel() {
  goBack()
}

// 返回列表页
function goBack() {
  if (settingsStore.settings.tabbar.enable && settingsStore.settings.tabbar.mergeTabsBy !== 'activeMenu') {
    tabbar.close({ name: 'pagesExampleGeneralMenuList' })
  }
  else {
    router.push({ name: 'pagesExampleGeneralMenuList' })
  }
}
</script>

<template>
  <div class="absolute-container">
    <div v-loading="loading" class="page-main">
      <ElForm ref="formRef" :model="form" :rules="formRules" label-position="top">
        <LayoutContainer right-side-width="500px" hide-right-side-toggle>
          <PageHeader v-if="!!form.parentId || showParent" title="基础配置" content="标准路由配置，包含 path/redirect/name/component" />
          <ElRow v-if="!!form.parentId || showParent" :gutter="30" style="padding: 20px;">
            <ElCol :xl="12" :lg="24">
              <ElFormItem label="菜单等级">
                <el-select v-model="form.grade" clear value-key="" placeholder="" clearable filterable>
                  <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
                </el-select>
              </ElFormItem>
            </ElCol>
            <ElCol :xl="12" :lg="24">
              <ElFormItem label="父级导航">
                <el-select v-model="form.parentId" clear value-key="" placeholder="" clearable filterable>
                  <el-option v-for="item in list" :key="item.id" :label="item.meta.title" :value="item.id" />
                </el-select>
              </ElFormItem>
            </ElCol>
            <ElCol :xl="12" :lg="24">
              <ElFormItem label="排序" prop="redirect">
                <ElInput v-model="form.sort" clearable placeholder="请输入排序" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="路由地址" prop="path">
                <ElInput v-model="form.path" clearable placeholder="请输入路由地址" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="重定向" prop="redirect">
                <ElInput v-model="form.redirect" clearable placeholder="请输入重定向地址" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="name">
                <template #label>
                  路由命名
                  <span class="label-tip">即 name ，系统唯一</span>
                </template>
                <ElInput v-model="form.name" clearable placeholder="请输入路由命名" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="component">
                <template #label>
                  组件路径
                  <span class="label-tip">
                    顶级路由请设置“<ElLink type="primary" :underline="false" @click.prevent="form.component = 'Layout'">Layout
                    </ElLink>”，中间层级路由无需设置
                  </span>
                </template>
                <ElInput v-model="form.component" clearable placeholder="请输入完整组件路径">
                  <template v-if="form.component !== 'Layout'" #prepend>
                    /src/views/
                  </template>
                </ElInput>
              </ElFormItem>
            </ElCol>
          </ElRow>
          <PageHeader title="扩展配置">
            <template #content>
              <div style="display: flex;">
                框架扩展配置，详细配置介绍请查看<ElLink
                  type="primary"
                  href="https://fantastic-admin.gitee.io/guide/router.html#%E5%AF%BC%E8%88%AA%E9%85%8D%E7%BD%AE"
                  target="_blank"
                >
                  框架文档
                </ElLink>
              </div>
            </template>
          </PageHeader>
          <ElRow :gutter="30" style="padding: 20px;">
            <!-- 父级id -->
            <!-- <ElCol v-if=" showParent" :xl="12" :lg="24">
              <ElFormItem label="父级id">
                <el-select v-model="form.parentId" clear value-key="" placeholder="" clearable filterable>
                  <el-option v-for="item in 4" :key="item" :label="item" :value="item" />
                </el-select>
              </ElFormItem>
            </ElCol> -->
            <ElCol :xl="12" :lg="24">
              <ElFormItem label="显示名称" prop="meta.title">
                <ElInput v-model="form.meta.title" clearable placeholder="请输入显示名称" />
              </ElFormItem>
            </ElCol>
            <ElCol :xl="12" :lg="24">
              <ElFormItem prop="meta.auth">
                <template #label>
                  鉴权标识
                  <ElTooltip content="当设置多个标识时，只要命中其中一个则鉴权通过" placement="top">
                    <SvgIcon name="i-ri:question-line" />
                  </ElTooltip>
                </template>
                <ElSpace>
                  <ElTag
                    v-for="item in (form.meta.auth as string[])" :key="item" size="large" closable
                    :disable-transitions="false" @close="onInputAuthClose(item)"
                  >
                    {{ item }}
                  </ElTag>
                  <ElInput
                    v-if="inputAuthVisible" ref="InputAuthRef" v-model="inputAuth" style="width: 200px;"
                    @keyup.enter="onInputAuthConfirm" @blur="onInputAuthConfirm"
                  />
                  <ElButton v-else @click="onInputAuthShow">
                    新增
                  </ElButton>
                </ElSpace>
              </ElFormItem>
            </ElCol>
            <ElCol :xl="12" :lg="24">
              <ElFormItem label="默认图标" prop="meta.icon">
                <IconPicker v-model="form.meta.icon" />
              </ElFormItem>
            </ElCol>
            <ElCol :xl="12" :lg="24">
              <ElFormItem label="激活图标" prop="meta.activeIcon">
                <IconPicker v-model="form.meta.activeIcon" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="默认展开" prop="meta.defaultOpened">
                <ElSwitch v-model="form.meta.defaultOpened" inline-prompt active-text="是" inactive-text="否" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="始终展开" prop="meta.alwaysOpened">
                <ElSwitch v-model="form.meta.alwaysOpened" inline-prompt active-text="是" inactive-text="否" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.permanent">
                <template #label>
                  常驻标签页
                  <span class="label-tip">请勿在带有参数的路由地址上开启该设置</span>
                </template>
                <ElSwitch v-model="form.meta.permanent" inline-prompt active-text="是" inactive-text="否" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="在导航显示" prop="meta.menu">
                <ElSwitch v-model="form.meta.menu" inline-prompt active-text="显示" inactive-text="隐藏" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="在面包屑显示" prop="meta.breadcrumb">
                <ElSwitch v-model="form.meta.breadcrumb" inline-prompt active-text="显示" inactive-text="隐藏" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.cache">
                <template #label>
                  缓存规则
                  <ElTooltip content="当跳转到设置的路由时，则会对当前路由进行缓存" placement="top">
                    <SvgIcon name="i-ri:question-line" />
                  </ElTooltip>
                  <span v-show="typeof form.meta.cache === 'object'" class="label-tip">切换为<ElLink
                    type="primary"
                    :underline="false" @click.prevent="form.meta.cache = true"
                  >始终缓存</ElLink></span>
                  <span v-show="typeof form.meta.cache === 'boolean'" class="label-tip">切换为<ElLink
                    type="primary"
                    :underline="false" @click.prevent="form.meta.cache = []"
                  >规则模式</ElLink></span>
                </template>
                <ElSpace v-show="typeof form.meta.cache === 'object'">
                  <ElTag
                    v-for="item in (form.meta.cache as string[])" :key="item" size="large" closable
                    :disable-transitions="false" @close="onInputCacheClose(item)"
                  >
                    {{ item }}
                  </ElTag>
                  <ElInput
                    v-if="inputCacheVisible" ref="InputCacheRef" v-model="inputCache" style="width: 200px;"
                    @keyup.enter="onInputCacheConfirm" @blur="onInputCacheConfirm"
                  />
                  <ElButton v-else @click="onInputCacheShow">
                    新增
                  </ElButton>
                </ElSpace>
                <div v-show="typeof form.meta.cache === 'boolean'">
                  始终缓存
                </div>
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.noCache">
                <template #label>
                  不缓存规则
                  <ElTooltip content="当跳转到设置的路由时，则会对当前路由取消缓存" placement="top">
                    <SvgIcon name="i-ri:question-line" />
                  </ElTooltip>
                  <span class="label-tip">当缓存规则为“始终缓存”时生效</span>
                </template>
                <ElSpace>
                  <ElTag
                    v-for="item in (form.meta.noCache as string[])" :key="item" size="large" closable
                    :disable-transitions="false" @close="onInputNoCacheClose(item)"
                  >
                    {{ item }}
                  </ElTag>
                  <ElInput
                    v-if="inputNoCacheVisible" ref="InputNoCacheRef" v-model="inputNoCache" style="width: 200px;"
                    @keyup.enter="onInputNoCacheConfirm" @blur="onInputNoCacheConfirm"
                  />
                  <ElButton v-else @click="onInputNoCacheShow">
                    新增
                  </ElButton>
                </ElSpace>
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.activeMenu">
                <template #label>
                  高亮导航
                  <span class="label-tip">如果子路由不在导航显示，则需要设置高亮的上级路由地址</span>
                </template>
                <ElInput v-model="form.meta.activeMenu" clearable placeholder="请输入高亮导航的完整路由地址" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.badge">
                <template #label>
                  徽标
                  <span class="label-tip">不宜设置太长，建议控制在4个字符内</span>
                </template>
                <ElInput v-model="form.meta.badge" clearable placeholder="请输入徽标显示内容" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="新窗口打开" prop="meta.newWindow">
                <ElSwitch v-model="form.meta.newWindow" inline-prompt active-text="是" inactive-text="否" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.link">
                <template #label>
                  访问外链
                  <span class="label-tip">请设置 http/https 开头的完整外链地址</span>
                </template>
                <ElInput v-model="form.meta.link" clearable placeholder="请输入网址" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.iframe">
                <template #label>
                  内嵌网页
                  <span class="label-tip">请勿与外链同时设置，同时设置时，本设置会失效</span>
                </template>
                <ElInput v-model="form.meta.iframe" clearable placeholder="请输入网址" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem label="底部版权" prop="meta.copyright">
                <ElSwitch v-model="form.meta.copyright" inline-prompt active-text="显示" inactive-text="隐藏" />
              </ElFormItem>
            </ElCol>
            <ElCol v-if="!!form.parentId" :xl="12" :lg="24">
              <ElFormItem prop="meta.paddingBottom">
                <template #label>
                  底部填充高度
                  <span class="label-tip">请设置有效的长度单位，例如：px/em/rem等</span>
                </template>
                <ElInput v-model="form.meta.paddingBottom" clearable placeholder="请输入显示名称" />
              </ElFormItem>
            </ElCol>
          </ElRow>
          <template #rightSide>
            <PageHeader title="权限池">
              <template #content>
                <p>设置导航所具备的所有权限，权限池内的权限会用于角色管理</p>
                <p style="margin-bottom: 0;">
                  通常只在最子级导航上进行设置
                </p>
              </template>
            </PageHeader>
            <ElTable
              ref="authsTableRef" :key="authsTableKey" :data="form.meta.auths" stripe highlight-current-row
              border
            >
              <ElTableColumn width="60" align="center" fixed>
                <template #header>
                  <ElButton type="primary" size="small" circle plain @click="onAuthAdd">
                    <template #icon>
                      <SvgIcon name="i-ep:plus" />
                    </template>
                  </ElButton>
                </template>
                <template #default="scope">
                  <span class="index">{{ scope.$index + 1 }}</span>
                  <ElButton type="danger" size="small" plain circle class="delete" @click="onAuthDelete(scope.$index)">
                    <template #icon>
                      <SvgIcon name="i-ep:delete" />
                    </template>
                  </ElButton>
                </template>
              </ElTableColumn>
              <ElTableColumn width="80" align="center" fixed>
                <template #header>
                  排序
                </template>
                <template #default>
                  <ElTag type="info" class="sortable">
                    <SvgIcon name="i-ep:d-caret" />
                  </ElTag>
                </template>
              </ElTableColumn>
              <ElTableColumn label="名称">
                <template #default="scope">
                  <ElInput v-model="scope.row.name" />
                </template>
              </ElTableColumn>
              <ElTableColumn label="标识">
                <template #default="scope">
                  <ElInput v-model="scope.row.value" />
                </template>
              </ElTableColumn>
            </ElTable>
          </template>
        </LayoutContainer>
        <el-form-item>
          <ElButton type="primary" size="large" @click="onSubmit">
            提交
          </ElButton>
          <ElButton size="large" @click="onCancel">
            取消
          </ElButton>
        </el-form-item>
        <template #footer>
          <ElButton size="large" @click="onCancel">
            取消
          </ElButton>
          <ElButton type="primary" size="large" @click="onSubmit">
            确定
          </ElButton>
        </template>
      </ElForm>
    </div>
    <!-- <FixedActionBar>
        <ElButton type="primary" size="large" @click="onSubmit">
          提交
        </ElButton>
        <ElButton size="large" @click="onCancel">
          取消
        </ElButton>
      </FixedActionBar> -->
  </div>
</template>

<style lang="scss" scoped>
.absolute-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .page-header {
    margin-bottom: 0;
  }

  .page-main,
  .el-form {
    display: flex;
    // 让 page-main 的高度自适应
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }

  .page-main {
    .flex-container {
      position: static;

      .page-header {
        margin-inline: -15px;
        margin-top: -15px;
        background-color: var(--el-disabled-bg-color);
      }

      :deep(.main) {
        .label-tip {
          display: inline-flex;
          margin-left: 10px;
          color: var(--el-text-color-disabled);
        }
      }

      :deep(.right-side) {
        display: flex;
        flex-direction: column;

        .el-table {
          height: 100%;
          margin-top: 15px;

          .el-table__row {
            &.ghost {
              opacity: 0;
            }

            .index {
              display: inline-block;
            }

            .delete {
              display: none;
            }

            &:hover {
              .index {
                display: none;
              }

              .delete {
                display: inline-block;
              }
            }

            .el-tag.sortable,
            .el-tag.sortable .icon {
              cursor: ns-resize;
            }
          }
        }
      }
    }
  }
}
</style>