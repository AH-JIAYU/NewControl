// vite.config.ts
import fs2 from "node:fs";
import path3 from "node:path";
import process2 from "node:process";
import { defineConfig, loadEnv } from "file:///E:/code/NewControl/node_modules/.pnpm/vite@5.2.7_sass@1.72.0_terser@5.30.0/node_modules/vite/dist/node/index.js";
import dayjs2 from "file:///E:/code/NewControl/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js";

// package.json
var package_default = {
  type: "module",
  version: "4.7.0",
  engines: {
    node: "^18.0.0 || ^20.0.0"
  },
  scripts: {
    dev: "vite",
    test: "vite --mode test",
    build: "vue-tsc && vite build",
    "build:test": "vue-tsc && vite build --mode test",
    serve: "http-server ./dist -o",
    "serve:test": "http-server ./dist-test -o",
    svgo: "svgo -f src/assets/icons",
    new: "plop",
    "generate:icons": "esno ./scripts/generate.icons.ts",
    lint: "npm-run-all -s lint:tsc lint:eslint lint:stylelint",
    "lint:tsc": "vue-tsc",
    "lint:eslint": "eslint . --cache --fix",
    "lint:stylelint": 'stylelint "src/**/*.{css,scss,vue}" --cache --fix',
    postinstall: "simple-git-hooks",
    preinstall: "npx only-allow pnpm",
    commit: "git cz",
    release: "bumpp"
  },
  dependencies: {
    "@headlessui/vue": "^1.7.19",
    "@imengyu/vue3-context-menu": "^1.3.9",
    "@kangc/v-md-editor": "^2.3.15",
    "@tinymce/tinymce-vue": "^5.1.1",
    "@vueuse/core": "^10.9.0",
    "@vueuse/integrations": "^10.9.0",
    axios: "^1.6.8",
    dayjs: "^1.11.10",
    defu: "^6.1.4",
    echarts: "^4.8.0",
    "element-plus": "^2.6.3",
    eruda: "^3.0.1",
    "floating-vue": "5.2.2",
    grapesjs: "^0.21.7",
    "grapesjs-advance-components": "^1.0.7",
    "grapesjs-blocks-basic": "^1.0.2",
    "grapesjs-parser-postcss": "^1.0.3",
    "grapesjs-preset-webpage": "^1.0.3",
    "hotkeys-js": "^3.13.7",
    "lodash-es": "^4.17.21",
    "medium-zoom": "^1.1.0",
    mitt: "^3.0.1",
    mockjs: "^1.1.0",
    nprogress: "^0.2.0",
    overlayscrollbars: "^2.6.1",
    "overlayscrollbars-vue": "^0.5.8",
    "path-browserify": "^1.0.1",
    "path-to-regexp": "^6.2.1",
    pinia: "^2.1.7",
    "pinyin-pro": "^3.19.6",
    qs: "^6.12.0",
    scule: "^1.3.0",
    sortablejs: "^1.15.2",
    spinkit: "^2.0.1",
    "survey-core": "^1.9.131",
    "survey-creator-core": "^1.9.131",
    "survey-creator-vue": "^1.9.131",
    "survey-vue3-ui": "^1.9.131",
    "timeago.js": "^4.0.2",
    tinymce: "^7.0.1",
    "v-wave": "^2.0.0",
    vconsole: "^3.15.1",
    vue: "^3.4.21",
    "vue-i18n": "^9.10.2",
    "vue-m-message": "^4.0.2",
    "vue-router": "^4.3.0",
    vuedraggable: "^4.1.0",
    xlsx: "^0.18.5"
  },
  devDependencies: {
    "@antfu/eslint-config": "2.11.6",
    "@bytemd/plugin-gfm": "^1.21.0",
    "@bytemd/vue-next": "^1.21.0",
    "@iconify/json": "^2.2.196",
    "@iconify/vue": "^4.1.1",
    "@intlify/unplugin-vue-i18n": "^4.0.0",
    "@stylistic/stylelint-config": "^1.0.1",
    "@types/lodash-es": "^4.17.12",
    "@types/mockjs": "^1.0.10",
    "@types/nprogress": "^0.2.3",
    "@types/path-browserify": "^1.0.2",
    "@types/qs": "^6.9.14",
    "@types/sortablejs": "^1.15.8",
    "@unocss/eslint-plugin": "^0.58.8",
    "@vitejs/plugin-legacy": "^5.3.2",
    "@vitejs/plugin-vue": "^5.0.4",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    archiver: "^7.0.1",
    autoprefixer: "^10.4.19",
    boxen: "^7.1.1",
    bumpp: "^9.4.0",
    "cz-git": "^1.9.1",
    eslint: "^8.57.0",
    esno: "^4.7.0",
    "fs-extra": "^11.2.0",
    "http-server": "^14.1.1",
    inquirer: "^9.2.17",
    "lint-staged": "^15.2.2",
    "npm-run-all": "^4.1.5",
    picocolors: "^1.0.0",
    plop: "^4.0.1",
    sass: "^1.72.0",
    "simple-git-hooks": "^2.11.1",
    stylelint: "^16.3.1",
    "stylelint-config-recess-order": "^5.0.0",
    "stylelint-config-standard-scss": "^13.0.0",
    "stylelint-config-standard-vue": "^1.0.0",
    "stylelint-scss": "^6.2.1",
    svgo: "^3.2.0",
    terser: "^5.30.0",
    typescript: "^5.4.3",
    unocss: "^0.58.8",
    "unplugin-auto-import": "^0.17.5",
    "unplugin-turbo-console": "^1.5.1",
    "unplugin-vue-components": "^0.26.0",
    vite: "^5.2.7",
    "vite-plugin-banner": "^0.7.1",
    "vite-plugin-compression2": "^1.0.0",
    "vite-plugin-fake-server": "^2.1.1",
    "vite-plugin-pages": "^0.32.1",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-plugin-vue-devtools": "^7.0.25",
    "vite-plugin-vue-meta-layouts": "^0.4.2",
    "vue-tsc": "^2.0.7"
  }
};

// vite/plugins/index.ts
import vue from "file:///E:/code/NewControl/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.7_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/code/NewControl/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.7_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueLegacy from "file:///E:/code/NewControl/node_modules/.pnpm/@vitejs+plugin-legacy@5.3.2_terser@5.30.0_vite@5.2.7/node_modules/@vitejs/plugin-legacy/dist/index.mjs";

// vite/plugins/app-info.ts
import boxen from "file:///E:/code/NewControl/node_modules/.pnpm/boxen@7.1.1/node_modules/boxen/index.js";
import picocolors from "file:///E:/code/NewControl/node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js";
function appInfo() {
  return {
    name: "appInfo",
    apply: "serve",
    async buildStart() {
      const { bold, green, magenta, bgGreen, underline } = picocolors;
      console.log(
        boxen(
          `${bold(green(`\u7531 ${bgGreen("Fantastic-admin")} \u9A71\u52A8`))}

${underline("https://fantastic-admin.gitee.io")}

\u5F53\u524D\u4F7F\u7528\uFF1A${magenta("\u4E13\u4E1A\u7248")}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: "double",
            textAlignment: "center"
          }
        )
      );
    }
  };
}

// vite/plugins/devtools.ts
import VueDevTools from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.25_vite@5.2.7_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
function createDevtools(env) {
  const { VITE_OPEN_DEVTOOLS } = env;
  return VITE_OPEN_DEVTOOLS === "true" && VueDevTools();
}

// vite/plugins/auto-import.ts
import autoImport from "file:///E:/code/NewControl/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
function createAutoImport() {
  return autoImport({
    imports: [
      "vue",
      "vue-router",
      "pinia"
    ],
    dts: "./src/types/auto-imports.d.ts",
    dirs: [
      "./src/utils/composables/**"
    ]
  });
}

// vite/plugins/components.ts
import components from "file:///E:/code/NewControl/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
function createComponents() {
  return components({
    dirs: [
      "src/components",
      "src/layouts/ui-kit"
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: "./src/types/components.d.ts"
  });
}

// vite/plugins/unocss.ts
import Unocss from "file:///E:/code/NewControl/node_modules/.pnpm/unocss@0.58.8_postcss@8.4.38_vite@5.2.7/node_modules/unocss/dist/vite.mjs";
function createUnocss() {
  return Unocss();
}

// vite/plugins/svg-icon.ts
import path from "node:path";
import process from "node:process";
import { createSvgIconsPlugin } from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.7/node_modules/vite-plugin-svg-icons/dist/index.mjs";
function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/")],
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild
  });
}

// vite/plugins/i18n.ts
import path2 from "node:path";
import vueI18n from "file:///E:/code/NewControl/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_vue-i18n@9.10.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_dirname = "E:\\code\\NewControl\\vite\\plugins";
function createI18n() {
  return vueI18n({
    include: path2.resolve(__vite_injected_original_dirname, "../../src/locales/lang/**")
  });
}

// vite/plugins/mock.ts
import { vitePluginFakeServer } from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-fake-server@2.1.1/node_modules/vite-plugin-fake-server/dist/index.mjs";
function createMock(env, isBuild) {
  const { VITE_BUILD_MOCK } = env;
  return vitePluginFakeServer({
    logger: !isBuild,
    include: "src/mock",
    infixName: false,
    enableProd: isBuild && VITE_BUILD_MOCK === "true"
  });
}

// vite/plugins/layouts.ts
import Layouts from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-vue-meta-layouts@0.4.2_vite@5.2.7_vue-router@4.3.0/node_modules/vite-plugin-vue-meta-layouts/dist/index.mjs";
function createLayouts() {
  return Layouts({
    defaultLayout: "index"
  });
}

// vite/plugins/pages.ts
import Pages from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-pages@0.32.1_@vue+compiler-sfc@3.4.21_vite@5.2.7/node_modules/vite-plugin-pages/dist/index.js";
function createPages() {
  return Pages({
    dirs: "src/views",
    exclude: [
      "**/components/**/*.vue"
    ]
  });
}

// vite/plugins/compression.ts
import { compression } from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-compression2@1.0.0/node_modules/vite-plugin-compression2/dist/index.mjs";
function createCompression(env, isBuild) {
  const plugin = [];
  if (isBuild) {
    const { VITE_BUILD_COMPRESS } = env;
    const compressList = VITE_BUILD_COMPRESS.split(",");
    if (compressList.includes("gzip")) {
      plugin.push(
        compression()
      );
    }
    if (compressList.includes("brotli")) {
      plugin.push(
        compression({
          exclude: [/\.(br)$/, /\.(gz)$/],
          algorithm: "brotliCompress"
        })
      );
    }
  }
  return plugin;
}

// vite/plugins/archiver.ts
import fs from "node:fs";
import dayjs from "file:///E:/code/NewControl/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js";
import archiver from "file:///E:/code/NewControl/node_modules/.pnpm/archiver@7.0.1/node_modules/archiver/index.js";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function createArchiver(env) {
  const { VITE_BUILD_ARCHIVE } = env;
  let outDir;
  return {
    name: "vite-plugin-archiver",
    apply: "build",
    configResolved(resolvedConfig) {
      outDir = resolvedConfig.build.outDir;
    },
    async closeBundle() {
      if (["zip", "tar"].includes(VITE_BUILD_ARCHIVE)) {
        await sleep(1e3);
        const archive = archiver(VITE_BUILD_ARCHIVE, {
          ...VITE_BUILD_ARCHIVE === "zip" && { zlib: { level: 9 } },
          ...VITE_BUILD_ARCHIVE === "tar" && { gzip: true, gzipOptions: { level: 9 } }
        });
        const output = fs.createWriteStream(`${outDir}.${dayjs().format("YYYY-MM-DD-HH-mm-ss")}.${VITE_BUILD_ARCHIVE === "zip" ? "zip" : "tar.gz"}`);
        archive.pipe(output);
        archive.directory(outDir, false);
        archive.finalize();
      }
    }
  };
}

// vite/plugins/console.ts
import TurboConsole from "file:///E:/code/NewControl/node_modules/.pnpm/unplugin-turbo-console@1.5.1_vite@5.2.7_vue@3.4.21/node_modules/unplugin-turbo-console/dist/vite.js";
function createConsole() {
  return TurboConsole();
}

// vite/plugins/banner.ts
import banner from "file:///E:/code/NewControl/node_modules/.pnpm/vite-plugin-banner@0.7.1/node_modules/vite-plugin-banner/dist/index.mjs";
function createBanner() {
  return banner(`
/**
 * \u7531 Fantastic-admin \u63D0\u4F9B\u6280\u672F\u652F\u6301
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */
`);
}

// vite/plugins/index.ts
function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    appInfo(),
    vue(),
    vueJsx(),
    vueLegacy({
      renderLegacyChunks: false,
      modernPolyfills: [
        "es.array.at",
        "es.array.find-last"
      ]
    })
  ];
  vitePlugins.push(createDevtools(viteEnv));
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  vitePlugins.push(createUnocss());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(createI18n());
  vitePlugins.push(createMock(viteEnv, isBuild));
  vitePlugins.push(createLayouts());
  vitePlugins.push(createPages());
  vitePlugins.push(...createCompression(viteEnv, isBuild));
  vitePlugins.push(createArchiver(viteEnv));
  vitePlugins.push(createConsole());
  vitePlugins.push(createBanner());
  return vitePlugins;
}

// vite.config.ts
var __vite_injected_original_dirname2 = "E:\\code\\NewControl";
var vite_config_default = async ({ mode, command }) => {
  const env = loadEnv(mode, process2.cwd());
  const scssResources = [];
  fs2.readdirSync("src/assets/styles/resources").forEach((dirname) => {
    if (fs2.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
      scssResources.push(`@use "src/assets/styles/resources/${dirname}" as *;`);
    }
  });
  return defineConfig({
    base: "/",
    // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
    server: {
      open: true,
      port: 9e3,
      proxy: {
        "/proxy": {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === "serve" && env.VITE_OPEN_PROXY === "true",
          rewrite: (path4) => path4.replace(/\/proxy/, "")
        }
      }
    },
    // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
    build: {
      outDir: mode === "production" ? "dist" : `dist-${mode}`,
      sourcemap: env.VITE_BUILD_SOURCEMAP === "true"
    },
    define: {
      __SYSTEM_INFO__: JSON.stringify({
        pkg: {
          version: package_default.version,
          dependencies: package_default.dependencies,
          devDependencies: package_default.devDependencies
        },
        lastBuildTime: dayjs2().format("YYYY-MM-DD HH:mm:ss")
      })
    },
    plugins: createVitePlugins(env, command === "build"),
    resolve: {
      alias: {
        "@": path3.resolve(__vite_injected_original_dirname2, "src"),
        "#": path3.resolve(__vite_injected_original_dirname2, "src/types")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssResources.join("")
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIiwgInZpdGUvcGx1Z2lucy9pbmRleC50cyIsICJ2aXRlL3BsdWdpbnMvYXBwLWluZm8udHMiLCAidml0ZS9wbHVnaW5zL2RldnRvb2xzLnRzIiwgInZpdGUvcGx1Z2lucy9hdXRvLWltcG9ydC50cyIsICJ2aXRlL3BsdWdpbnMvY29tcG9uZW50cy50cyIsICJ2aXRlL3BsdWdpbnMvdW5vY3NzLnRzIiwgInZpdGUvcGx1Z2lucy9zdmctaWNvbi50cyIsICJ2aXRlL3BsdWdpbnMvaTE4bi50cyIsICJ2aXRlL3BsdWdpbnMvbW9jay50cyIsICJ2aXRlL3BsdWdpbnMvbGF5b3V0cy50cyIsICJ2aXRlL3BsdWdpbnMvcGFnZXMudHMiLCAidml0ZS9wbHVnaW5zL2NvbXByZXNzaW9uLnRzIiwgInZpdGUvcGx1Z2lucy9hcmNoaXZlci50cyIsICJ2aXRlL3BsdWdpbnMvY29uc29sZS50cyIsICJ2aXRlL3BsdWdpbnMvYmFubmVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcY29kZVxcXFxOZXdDb250cm9sXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvTmV3Q29udHJvbC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xyXG5pbXBvcnQgY3JlYXRlVml0ZVBsdWdpbnMgZnJvbSAnLi92aXRlL3BsdWdpbnMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBtb2RlLCBjb21tYW5kIH0pID0+IHtcclxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXHJcbiAgLy8gXHU1MTY4XHU1QzQwIHNjc3MgXHU4RDQ0XHU2RTkwXHJcbiAgY29uc3Qgc2Nzc1Jlc291cmNlcyA9IFtdXHJcbiAgZnMucmVhZGRpclN5bmMoJ3NyYy9hc3NldHMvc3R5bGVzL3Jlc291cmNlcycpLmZvckVhY2goKGRpcm5hbWUpID0+IHtcclxuICAgIGlmIChmcy5zdGF0U3luYyhgc3JjL2Fzc2V0cy9zdHlsZXMvcmVzb3VyY2VzLyR7ZGlybmFtZX1gKS5pc0ZpbGUoKSkge1xyXG4gICAgICBzY3NzUmVzb3VyY2VzLnB1c2goYEB1c2UgXCJzcmMvYXNzZXRzL3N0eWxlcy9yZXNvdXJjZXMvJHtkaXJuYW1lfVwiIGFzICo7YClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgLy8gXHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXHU1NjY4XHU5MDA5XHU5ODc5IGh0dHBzOi8vY24udml0ZWpzLmRldi9jb25maWcvI3NlcnZlci1vcHRpb25zXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgcG9ydDogOTAwMCxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL3Byb3h5Jzoge1xyXG4gICAgICAgICAgdGFyZ2V0OiBlbnYuVklURV9BUFBfQVBJX0JBU0VVUkwsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IGNvbW1hbmQgPT09ICdzZXJ2ZScgJiYgZW52LlZJVEVfT1BFTl9QUk9YWSA9PT0gJ3RydWUnLFxyXG4gICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL1xcL3Byb3h5LywgJycpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8gXHU2Nzg0XHU1RUZBXHU5MDA5XHU5ODc5IGh0dHBzOi8vY24udml0ZWpzLmRldi9jb25maWcvI3NlcnZlci1mc3NlcnZlLXJvb3RcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIG91dERpcjogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2Rpc3QnIDogYGRpc3QtJHttb2RlfWAsXHJcbiAgICAgIHNvdXJjZW1hcDogZW52LlZJVEVfQlVJTERfU09VUkNFTUFQID09PSAndHJ1ZScsXHJcbiAgICB9LFxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIF9fU1lTVEVNX0lORk9fXzogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHBrZzoge1xyXG4gICAgICAgICAgdmVyc2lvbjogcGtnLnZlcnNpb24sXHJcbiAgICAgICAgICBkZXBlbmRlbmNpZXM6IHBrZy5kZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgICBkZXZEZXBlbmRlbmNpZXM6IHBrZy5kZXZEZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0QnVpbGRUaW1lOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyhlbnYsIGNvbW1hbmQgPT09ICdidWlsZCcpLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICAgICcjJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90eXBlcycpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IHNjc3NSZXNvdXJjZXMuam9pbignJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxufVxyXG4iLCAie1xyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwidmVyc2lvblwiOiBcIjQuNy4wXCIsXHJcbiAgXCJlbmdpbmVzXCI6IHtcclxuICAgIFwibm9kZVwiOiBcIl4xOC4wLjAgfHwgXjIwLjAuMFwiXHJcbiAgfSxcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXHJcbiAgICBcInRlc3RcIjogXCJ2aXRlIC0tbW9kZSB0ZXN0XCIsXHJcbiAgICBcImJ1aWxkXCI6IFwidnVlLXRzYyAmJiB2aXRlIGJ1aWxkXCIsXHJcbiAgICBcImJ1aWxkOnRlc3RcIjogXCJ2dWUtdHNjICYmIHZpdGUgYnVpbGQgLS1tb2RlIHRlc3RcIixcclxuICAgIFwic2VydmVcIjogXCJodHRwLXNlcnZlciAuL2Rpc3QgLW9cIixcclxuICAgIFwic2VydmU6dGVzdFwiOiBcImh0dHAtc2VydmVyIC4vZGlzdC10ZXN0IC1vXCIsXHJcbiAgICBcInN2Z29cIjogXCJzdmdvIC1mIHNyYy9hc3NldHMvaWNvbnNcIixcclxuICAgIFwibmV3XCI6IFwicGxvcFwiLFxyXG4gICAgXCJnZW5lcmF0ZTppY29uc1wiOiBcImVzbm8gLi9zY3JpcHRzL2dlbmVyYXRlLmljb25zLnRzXCIsXHJcbiAgICBcImxpbnRcIjogXCJucG0tcnVuLWFsbCAtcyBsaW50OnRzYyBsaW50OmVzbGludCBsaW50OnN0eWxlbGludFwiLFxyXG4gICAgXCJsaW50OnRzY1wiOiBcInZ1ZS10c2NcIixcclxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLiAtLWNhY2hlIC0tZml4XCIsXHJcbiAgICBcImxpbnQ6c3R5bGVsaW50XCI6IFwic3R5bGVsaW50IFxcXCJzcmMvKiovKi57Y3NzLHNjc3MsdnVlfVxcXCIgLS1jYWNoZSAtLWZpeFwiLFxyXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcInNpbXBsZS1naXQtaG9va3NcIixcclxuICAgIFwicHJlaW5zdGFsbFwiOiBcIm5weCBvbmx5LWFsbG93IHBucG1cIixcclxuICAgIFwiY29tbWl0XCI6IFwiZ2l0IGN6XCIsXHJcbiAgICBcInJlbGVhc2VcIjogXCJidW1wcFwiXHJcbiAgfSxcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBoZWFkbGVzc3VpL3Z1ZVwiOiBcIl4xLjcuMTlcIixcclxuICAgIFwiQGltZW5neXUvdnVlMy1jb250ZXh0LW1lbnVcIjogXCJeMS4zLjlcIixcclxuICAgIFwiQGthbmdjL3YtbWQtZWRpdG9yXCI6IFwiXjIuMy4xNVwiLFxyXG4gICAgXCJAdGlueW1jZS90aW55bWNlLXZ1ZVwiOiBcIl41LjEuMVwiLFxyXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuOS4wXCIsXHJcbiAgICBcIkB2dWV1c2UvaW50ZWdyYXRpb25zXCI6IFwiXjEwLjkuMFwiLFxyXG4gICAgXCJheGlvc1wiOiBcIl4xLjYuOFwiLFxyXG4gICAgXCJkYXlqc1wiOiBcIl4xLjExLjEwXCIsXHJcbiAgICBcImRlZnVcIjogXCJeNi4xLjRcIixcclxuICAgIFwiZWNoYXJ0c1wiOiBcIl40LjguMFwiLFxyXG4gICAgXCJlbGVtZW50LXBsdXNcIjogXCJeMi42LjNcIixcclxuICAgIFwiZXJ1ZGFcIjogXCJeMy4wLjFcIixcclxuICAgIFwiZmxvYXRpbmctdnVlXCI6IFwiNS4yLjJcIixcclxuICAgIFwiZ3JhcGVzanNcIjogXCJeMC4yMS43XCIsXHJcbiAgICBcImdyYXBlc2pzLWFkdmFuY2UtY29tcG9uZW50c1wiOiBcIl4xLjAuN1wiLFxyXG4gICAgXCJncmFwZXNqcy1ibG9ja3MtYmFzaWNcIjogXCJeMS4wLjJcIixcclxuICAgIFwiZ3JhcGVzanMtcGFyc2VyLXBvc3Rjc3NcIjogXCJeMS4wLjNcIixcclxuICAgIFwiZ3JhcGVzanMtcHJlc2V0LXdlYnBhZ2VcIjogXCJeMS4wLjNcIixcclxuICAgIFwiaG90a2V5cy1qc1wiOiBcIl4zLjEzLjdcIixcclxuICAgIFwibG9kYXNoLWVzXCI6IFwiXjQuMTcuMjFcIixcclxuICAgIFwibWVkaXVtLXpvb21cIjogXCJeMS4xLjBcIixcclxuICAgIFwibWl0dFwiOiBcIl4zLjAuMVwiLFxyXG4gICAgXCJtb2NranNcIjogXCJeMS4xLjBcIixcclxuICAgIFwibnByb2dyZXNzXCI6IFwiXjAuMi4wXCIsXHJcbiAgICBcIm92ZXJsYXlzY3JvbGxiYXJzXCI6IFwiXjIuNi4xXCIsXHJcbiAgICBcIm92ZXJsYXlzY3JvbGxiYXJzLXZ1ZVwiOiBcIl4wLjUuOFwiLFxyXG4gICAgXCJwYXRoLWJyb3dzZXJpZnlcIjogXCJeMS4wLjFcIixcclxuICAgIFwicGF0aC10by1yZWdleHBcIjogXCJeNi4yLjFcIixcclxuICAgIFwicGluaWFcIjogXCJeMi4xLjdcIixcclxuICAgIFwicGlueWluLXByb1wiOiBcIl4zLjE5LjZcIixcclxuICAgIFwicXNcIjogXCJeNi4xMi4wXCIsXHJcbiAgICBcInNjdWxlXCI6IFwiXjEuMy4wXCIsXHJcbiAgICBcInNvcnRhYmxlanNcIjogXCJeMS4xNS4yXCIsXHJcbiAgICBcInNwaW5raXRcIjogXCJeMi4wLjFcIixcclxuICAgIFwic3VydmV5LWNvcmVcIjogXCJeMS45LjEzMVwiLFxyXG4gICAgXCJzdXJ2ZXktY3JlYXRvci1jb3JlXCI6IFwiXjEuOS4xMzFcIixcclxuICAgIFwic3VydmV5LWNyZWF0b3ItdnVlXCI6IFwiXjEuOS4xMzFcIixcclxuICAgIFwic3VydmV5LXZ1ZTMtdWlcIjogXCJeMS45LjEzMVwiLFxyXG4gICAgXCJ0aW1lYWdvLmpzXCI6IFwiXjQuMC4yXCIsXHJcbiAgICBcInRpbnltY2VcIjogXCJeNy4wLjFcIixcclxuICAgIFwidi13YXZlXCI6IFwiXjIuMC4wXCIsXHJcbiAgICBcInZjb25zb2xlXCI6IFwiXjMuMTUuMVwiLFxyXG4gICAgXCJ2dWVcIjogXCJeMy40LjIxXCIsXHJcbiAgICBcInZ1ZS1pMThuXCI6IFwiXjkuMTAuMlwiLFxyXG4gICAgXCJ2dWUtbS1tZXNzYWdlXCI6IFwiXjQuMC4yXCIsXHJcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC4zLjBcIixcclxuICAgIFwidnVlZHJhZ2dhYmxlXCI6IFwiXjQuMS4wXCIsXHJcbiAgICBcInhsc3hcIjogXCJeMC4xOC41XCJcclxuICB9LFxyXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGFudGZ1L2VzbGludC1jb25maWdcIjogXCIyLjExLjZcIixcclxuICAgIFwiQGJ5dGVtZC9wbHVnaW4tZ2ZtXCI6IFwiXjEuMjEuMFwiLFxyXG4gICAgXCJAYnl0ZW1kL3Z1ZS1uZXh0XCI6IFwiXjEuMjEuMFwiLFxyXG4gICAgXCJAaWNvbmlmeS9qc29uXCI6IFwiXjIuMi4xOTZcIixcclxuICAgIFwiQGljb25pZnkvdnVlXCI6IFwiXjQuMS4xXCIsXHJcbiAgICBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuXCI6IFwiXjQuMC4wXCIsXHJcbiAgICBcIkBzdHlsaXN0aWMvc3R5bGVsaW50LWNvbmZpZ1wiOiBcIl4xLjAuMVwiLFxyXG4gICAgXCJAdHlwZXMvbG9kYXNoLWVzXCI6IFwiXjQuMTcuMTJcIixcclxuICAgIFwiQHR5cGVzL21vY2tqc1wiOiBcIl4xLjAuMTBcIixcclxuICAgIFwiQHR5cGVzL25wcm9ncmVzc1wiOiBcIl4wLjIuM1wiLFxyXG4gICAgXCJAdHlwZXMvcGF0aC1icm93c2VyaWZ5XCI6IFwiXjEuMC4yXCIsXHJcbiAgICBcIkB0eXBlcy9xc1wiOiBcIl42LjkuMTRcIixcclxuICAgIFwiQHR5cGVzL3NvcnRhYmxlanNcIjogXCJeMS4xNS44XCIsXHJcbiAgICBcIkB1bm9jc3MvZXNsaW50LXBsdWdpblwiOiBcIl4wLjU4LjhcIixcclxuICAgIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI6IFwiXjUuMy4yXCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjAuNFwiLFxyXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjMuMS4wXCIsXHJcbiAgICBcImFyY2hpdmVyXCI6IFwiXjcuMC4xXCIsXHJcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjE5XCIsXHJcbiAgICBcImJveGVuXCI6IFwiXjcuMS4xXCIsXHJcbiAgICBcImJ1bXBwXCI6IFwiXjkuNC4wXCIsXHJcbiAgICBcImN6LWdpdFwiOiBcIl4xLjkuMVwiLFxyXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXHJcbiAgICBcImVzbm9cIjogXCJeNC43LjBcIixcclxuICAgIFwiZnMtZXh0cmFcIjogXCJeMTEuMi4wXCIsXHJcbiAgICBcImh0dHAtc2VydmVyXCI6IFwiXjE0LjEuMVwiLFxyXG4gICAgXCJpbnF1aXJlclwiOiBcIl45LjIuMTdcIixcclxuICAgIFwibGludC1zdGFnZWRcIjogXCJeMTUuMi4yXCIsXHJcbiAgICBcIm5wbS1ydW4tYWxsXCI6IFwiXjQuMS41XCIsXHJcbiAgICBcInBpY29jb2xvcnNcIjogXCJeMS4wLjBcIixcclxuICAgIFwicGxvcFwiOiBcIl40LjAuMVwiLFxyXG4gICAgXCJzYXNzXCI6IFwiXjEuNzIuMFwiLFxyXG4gICAgXCJzaW1wbGUtZ2l0LWhvb2tzXCI6IFwiXjIuMTEuMVwiLFxyXG4gICAgXCJzdHlsZWxpbnRcIjogXCJeMTYuMy4xXCIsXHJcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjZXNzLW9yZGVyXCI6IFwiXjUuMC4wXCIsXHJcbiAgICBcInN0eWxlbGludC1jb25maWctc3RhbmRhcmQtc2Nzc1wiOiBcIl4xMy4wLjBcIixcclxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1zdGFuZGFyZC12dWVcIjogXCJeMS4wLjBcIixcclxuICAgIFwic3R5bGVsaW50LXNjc3NcIjogXCJeNi4yLjFcIixcclxuICAgIFwic3Znb1wiOiBcIl4zLjIuMFwiLFxyXG4gICAgXCJ0ZXJzZXJcIjogXCJeNS4zMC4wXCIsXHJcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS40LjNcIixcclxuICAgIFwidW5vY3NzXCI6IFwiXjAuNTguOFwiLFxyXG4gICAgXCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiOiBcIl4wLjE3LjVcIixcclxuICAgIFwidW5wbHVnaW4tdHVyYm8tY29uc29sZVwiOiBcIl4xLjUuMVwiLFxyXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI2LjBcIixcclxuICAgIFwidml0ZVwiOiBcIl41LjIuN1wiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1iYW5uZXJcIjogXCJeMC43LjFcIixcclxuICAgIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb24yXCI6IFwiXjEuMC4wXCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLWZha2Utc2VydmVyXCI6IFwiXjIuMS4xXCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLXBhZ2VzXCI6IFwiXjAuMzIuMVwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjogXCJeMi4wLjFcIixcclxuICAgIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI6IFwiXjcuMC4yNVwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtbWV0YS1sYXlvdXRzXCI6IFwiXjAuNC4yXCIsXHJcbiAgICBcInZ1ZS10c2NcIjogXCJeMi4wLjdcIlxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvTmV3Q29udHJvbC92aXRlL3BsdWdpbnMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB2dWVMZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xyXG5pbXBvcnQgYXBwSW5mbyBmcm9tICcuL2FwcC1pbmZvJ1xyXG5cclxuaW1wb3J0IGNyZWF0ZURldnRvb2xzIGZyb20gJy4vZGV2dG9vbHMnXHJcbmltcG9ydCBjcmVhdGVBdXRvSW1wb3J0IGZyb20gJy4vYXV0by1pbXBvcnQnXHJcbmltcG9ydCBjcmVhdGVDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcclxuaW1wb3J0IGNyZWF0ZVVub2NzcyBmcm9tICcuL3Vub2NzcydcclxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi9zdmctaWNvbidcclxuaW1wb3J0IGNyZWF0ZUkxOG4gZnJvbSAnLi9pMThuJ1xyXG5pbXBvcnQgY3JlYXRlTW9jayBmcm9tICcuL21vY2snXHJcbmltcG9ydCBjcmVhdGVMYXlvdXRzIGZyb20gJy4vbGF5b3V0cydcclxuaW1wb3J0IGNyZWF0ZVBhZ2VzIGZyb20gJy4vcGFnZXMnXHJcbmltcG9ydCBjcmVhdGVDb21wcmVzc2lvbiBmcm9tICcuL2NvbXByZXNzaW9uJ1xyXG5pbXBvcnQgY3JlYXRlQXJjaGl2ZXIgZnJvbSAnLi9hcmNoaXZlcidcclxuaW1wb3J0IGNyZWF0ZUNvbnNvbGUgZnJvbSAnLi9jb25zb2xlJ1xyXG5pbXBvcnQgY3JlYXRlQmFubmVyIGZyb20gJy4vYmFubmVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudiwgaXNCdWlsZCA9IGZhbHNlKSB7XHJcbiAgY29uc3Qgdml0ZVBsdWdpbnM6IChQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSlbXSA9IFtcclxuICAgIGFwcEluZm8oKSxcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICB2dWVMZWdhY3koe1xyXG4gICAgICByZW5kZXJMZWdhY3lDaHVua3M6IGZhbHNlLFxyXG4gICAgICBtb2Rlcm5Qb2x5ZmlsbHM6IFtcclxuICAgICAgICAnZXMuYXJyYXkuYXQnLFxyXG4gICAgICAgICdlcy5hcnJheS5maW5kLWxhc3QnLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgXVxyXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlRGV2dG9vbHModml0ZUVudikpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVBdXRvSW1wb3J0KCkpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb21wb25lbnRzKCkpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVVbm9jc3MoKSlcclxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZVN2Z0ljb24oaXNCdWlsZCkpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVJMThuKCkpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVNb2NrKHZpdGVFbnYsIGlzQnVpbGQpKVxyXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlTGF5b3V0cygpKVxyXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlUGFnZXMoKSlcclxuICB2aXRlUGx1Z2lucy5wdXNoKC4uLmNyZWF0ZUNvbXByZXNzaW9uKHZpdGVFbnYsIGlzQnVpbGQpKVxyXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlQXJjaGl2ZXIodml0ZUVudikpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb25zb2xlKCkpXHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVCYW5uZXIoKSlcclxuICByZXR1cm4gdml0ZVBsdWdpbnNcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcYXBwLWluZm8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvTmV3Q29udHJvbC92aXRlL3BsdWdpbnMvYXBwLWluZm8udHNcIjtpbXBvcnQgYm94ZW4gZnJvbSAnYm94ZW4nXHJcbmltcG9ydCBwaWNvY29sb3JzIGZyb20gJ3BpY29jb2xvcnMnXHJcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcEluZm8oKTogUGx1Z2luIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ2FwcEluZm8nLFxyXG4gICAgYXBwbHk6ICdzZXJ2ZScsXHJcbiAgICBhc3luYyBidWlsZFN0YXJ0KCkge1xyXG4gICAgICBjb25zdCB7IGJvbGQsIGdyZWVuLCBtYWdlbnRhLCBiZ0dyZWVuLCB1bmRlcmxpbmUgfSA9IHBpY29jb2xvcnNcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYm94ZW4oXHJcbiAgICAgICAgICBgJHtib2xkKGdyZWVuKGBcdTc1MzEgJHtiZ0dyZWVuKCdGYW50YXN0aWMtYWRtaW4nKX0gXHU5QTcxXHU1MkE4YCkpfVxcblxcbiR7dW5kZXJsaW5lKCdodHRwczovL2ZhbnRhc3RpYy1hZG1pbi5naXRlZS5pbycpfVxcblxcblx1NUY1M1x1NTI0RFx1NEY3Rlx1NzUyOFx1RkYxQSR7bWFnZW50YSgnXHU0RTEzXHU0RTFBXHU3MjQ4Jyl9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMSxcclxuICAgICAgICAgICAgbWFyZ2luOiAxLFxyXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogJ2RvdWJsZScsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICApLFxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcZGV2dG9vbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvTmV3Q29udHJvbC92aXRlL3BsdWdpbnMvZGV2dG9vbHMudHNcIjtpbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGV2dG9vbHMoZW52KSB7XHJcbiAgY29uc3QgeyBWSVRFX09QRU5fREVWVE9PTFMgfSA9IGVudlxyXG4gIHJldHVybiBWSVRFX09QRU5fREVWVE9PTFMgPT09ICd0cnVlJyAmJiBWdWVEZXZUb29scygpXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGF1dG8taW1wb3J0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL2F1dG8taW1wb3J0LnRzXCI7aW1wb3J0IGF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF1dG9JbXBvcnQoKSB7XHJcbiAgcmV0dXJuIGF1dG9JbXBvcnQoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAndnVlJyxcclxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxyXG4gICAgICAncGluaWEnLFxyXG4gICAgXSxcclxuICAgIGR0czogJy4vc3JjL3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgIGRpcnM6IFtcclxuICAgICAgJy4vc3JjL3V0aWxzL2NvbXBvc2FibGVzLyoqJyxcclxuICAgIF0sXHJcbiAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcY29tcG9uZW50cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY29kZS9OZXdDb250cm9sL3ZpdGUvcGx1Z2lucy9jb21wb25lbnRzLnRzXCI7aW1wb3J0IGNvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudHMoKSB7XHJcbiAgcmV0dXJuIGNvbXBvbmVudHMoe1xyXG4gICAgZGlyczogW1xyXG4gICAgICAnc3JjL2NvbXBvbmVudHMnLFxyXG4gICAgICAnc3JjL2xheW91dHMvdWkta2l0JyxcclxuICAgIF0sXHJcbiAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLnRzeCQvXSxcclxuICAgIGR0czogJy4vc3JjL3R5cGVzL2NvbXBvbmVudHMuZC50cycsXHJcbiAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcdW5vY3NzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL3Vub2Nzcy50c1wiO2ltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVVbm9jc3MoKSB7XHJcbiAgcmV0dXJuIFVub2NzcygpXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXHN2Zy1pY29uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL3N2Zy1pY29uLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3ZnSWNvbihpc0J1aWxkKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zLycpXSxcclxuICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgc3Znb09wdGlvbnM6IGlzQnVpbGQsXHJcbiAgfSlcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcaTE4bi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY29kZS9OZXdDb250cm9sL3ZpdGUvcGx1Z2lucy9pMThuLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgdnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSTE4bigpIHtcclxuICByZXR1cm4gdnVlSTE4bih7XHJcbiAgICBpbmNsdWRlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vc3JjL2xvY2FsZXMvbGFuZy8qKicpLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXG1vY2sudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvTmV3Q29udHJvbC92aXRlL3BsdWdpbnMvbW9jay50c1wiO2ltcG9ydCB7IHZpdGVQbHVnaW5GYWtlU2VydmVyIH0gZnJvbSAndml0ZS1wbHVnaW4tZmFrZS1zZXJ2ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNb2NrKGVudiwgaXNCdWlsZCkge1xyXG4gIGNvbnN0IHsgVklURV9CVUlMRF9NT0NLIH0gPSBlbnZcclxuICByZXR1cm4gdml0ZVBsdWdpbkZha2VTZXJ2ZXIoe1xyXG4gICAgbG9nZ2VyOiAhaXNCdWlsZCxcclxuICAgIGluY2x1ZGU6ICdzcmMvbW9jaycsXHJcbiAgICBpbmZpeE5hbWU6IGZhbHNlLFxyXG4gICAgZW5hYmxlUHJvZDogaXNCdWlsZCAmJiBWSVRFX0JVSUxEX01PQ0sgPT09ICd0cnVlJyxcclxuICB9KVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcY29kZVxcXFxOZXdDb250cm9sXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kZVxcXFxOZXdDb250cm9sXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxsYXlvdXRzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL2xheW91dHMudHNcIjtpbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbWV0YS1sYXlvdXRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGF5b3V0cygpIHtcclxuICByZXR1cm4gTGF5b3V0cyh7XHJcbiAgICBkZWZhdWx0TGF5b3V0OiAnaW5kZXgnLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXHBhZ2VzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL3BhZ2VzLnRzXCI7aW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFnZXMoKSB7XHJcbiAgcmV0dXJuIFBhZ2VzKHtcclxuICAgIGRpcnM6ICdzcmMvdmlld3MnLFxyXG4gICAgZXhjbHVkZTogW1xyXG4gICAgICAnKiovY29tcG9uZW50cy8qKi8qLnZ1ZScsXHJcbiAgICBdLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGNvbXByZXNzaW9uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL2NvbXByZXNzaW9uLnRzXCI7aW1wb3J0IHsgY29tcHJlc3Npb24gfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXHJcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbXByZXNzaW9uKGVudiwgaXNCdWlsZCkge1xyXG4gIGNvbnN0IHBsdWdpbjogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0gW11cclxuICBpZiAoaXNCdWlsZCkge1xyXG4gICAgY29uc3QgeyBWSVRFX0JVSUxEX0NPTVBSRVNTIH0gPSBlbnZcclxuICAgIGNvbnN0IGNvbXByZXNzTGlzdCA9IFZJVEVfQlVJTERfQ09NUFJFU1Muc3BsaXQoJywnKVxyXG4gICAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnZ3ppcCcpKSB7XHJcbiAgICAgIHBsdWdpbi5wdXNoKFxyXG4gICAgICAgIGNvbXByZXNzaW9uKCksXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XHJcbiAgICAgIHBsdWdpbi5wdXNoKFxyXG4gICAgICAgIGNvbXByZXNzaW9uKHtcclxuICAgICAgICAgIGV4Y2x1ZGU6IFsvXFwuKGJyKSQvLCAvXFwuKGd6KSQvXSxcclxuICAgICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGx1Z2luXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXE5ld0NvbnRyb2xcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGFyY2hpdmVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL05ld0NvbnRyb2wvdml0ZS9wbHVnaW5zL2FyY2hpdmVyLnRzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuaW1wb3J0IGFyY2hpdmVyIGZyb20gJ2FyY2hpdmVyJ1xyXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnXHJcblxyXG5mdW5jdGlvbiBzbGVlcChtcykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcmNoaXZlcihlbnYpOiBQbHVnaW4ge1xyXG4gIGNvbnN0IHsgVklURV9CVUlMRF9BUkNISVZFIH0gPSBlbnZcclxuICBsZXQgb3V0RGlyOiBzdHJpbmdcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWFyY2hpdmVyJyxcclxuICAgIGFwcGx5OiAnYnVpbGQnLFxyXG4gICAgY29uZmlnUmVzb2x2ZWQocmVzb2x2ZWRDb25maWcpIHtcclxuICAgICAgb3V0RGlyID0gcmVzb2x2ZWRDb25maWcuYnVpbGQub3V0RGlyXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY2xvc2VCdW5kbGUoKSB7XHJcbiAgICAgIGlmIChbJ3ppcCcsICd0YXInXS5pbmNsdWRlcyhWSVRFX0JVSUxEX0FSQ0hJVkUpKSB7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcclxuICAgICAgICBjb25zdCBhcmNoaXZlID0gYXJjaGl2ZXIoVklURV9CVUlMRF9BUkNISVZFLCB7XHJcbiAgICAgICAgICAuLi4oVklURV9CVUlMRF9BUkNISVZFID09PSAnemlwJyAmJiB7IHpsaWI6IHsgbGV2ZWw6IDkgfSB9KSxcclxuICAgICAgICAgIC4uLihWSVRFX0JVSUxEX0FSQ0hJVkUgPT09ICd0YXInICYmIHsgZ3ppcDogdHJ1ZSwgZ3ppcE9wdGlvbnM6IHsgbGV2ZWw6IDkgfSB9KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKGAke291dERpcn0uJHtkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERC1ISC1tbS1zcycpfS4ke1ZJVEVfQlVJTERfQVJDSElWRSA9PT0gJ3ppcCcgPyAnemlwJyA6ICd0YXIuZ3onfWApXHJcbiAgICAgICAgYXJjaGl2ZS5waXBlKG91dHB1dClcclxuICAgICAgICBhcmNoaXZlLmRpcmVjdG9yeShvdXREaXIsIGZhbHNlKVxyXG4gICAgICAgIGFyY2hpdmUuZmluYWxpemUoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcTmV3Q29udHJvbFxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcY29uc29sZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY29kZS9OZXdDb250cm9sL3ZpdGUvcGx1Z2lucy9jb25zb2xlLnRzXCI7aW1wb3J0IFR1cmJvQ29uc29sZSBmcm9tICd1bnBsdWdpbi10dXJiby1jb25zb2xlL3ZpdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb25zb2xlKCkge1xyXG4gIHJldHVybiBUdXJib0NvbnNvbGUoKVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcY29kZVxcXFxOZXdDb250cm9sXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kZVxcXFxOZXdDb250cm9sXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxiYW5uZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvTmV3Q29udHJvbC92aXRlL3BsdWdpbnMvYmFubmVyLnRzXCI7aW1wb3J0IGJhbm5lciBmcm9tICd2aXRlLXBsdWdpbi1iYW5uZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCYW5uZXIoKSB7XHJcbiAgcmV0dXJuIGJhbm5lcihgXHJcbi8qKlxyXG4gKiBcdTc1MzEgRmFudGFzdGljLWFkbWluIFx1NjNEMFx1NEY5Qlx1NjI4MFx1NjcyRlx1NjUyRlx1NjMwMVxyXG4gKiBQb3dlcmVkIGJ5IEZhbnRhc3RpYy1hZG1pblxyXG4gKiBHaXRlZSAgaHR0cHM6Ly9mYW50YXN0aWMtYWRtaW4uZ2l0ZWUuaW9cclxuICogR2l0aHViIGh0dHBzOi8vZmFudGFzdGljLWFkbWluLmdpdGh1Yi5pb1xyXG4gKi9cclxuYClcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThPLE9BQU9BLFNBQVE7QUFDN1AsT0FBT0MsV0FBVTtBQUNqQixPQUFPQyxjQUFhO0FBQ3BCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU9DLFlBQVc7OztBQ0psQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNB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QUFBLE1BQ04saUJBQWlCLEtBQUssVUFBVTtBQUFBLFFBQzlCLEtBQUs7QUFBQSxVQUNILFNBQVMsZ0JBQUk7QUFBQSxVQUNiLGNBQWMsZ0JBQUk7QUFBQSxVQUNsQixpQkFBaUIsZ0JBQUk7QUFBQSxRQUN2QjtBQUFBLFFBQ0EsZUFBZUMsT0FBTSxFQUFFLE9BQU8scUJBQXFCO0FBQUEsTUFDckQsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVMsa0JBQWtCLEtBQUssWUFBWSxPQUFPO0FBQUEsSUFDbkQsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBS0QsTUFBSyxRQUFRRSxtQ0FBVyxLQUFLO0FBQUEsUUFDbEMsS0FBS0YsTUFBSyxRQUFRRSxtQ0FBVyxXQUFXO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixnQkFBZ0IsY0FBYyxLQUFLLEVBQUU7QUFBQSxRQUN2QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImZzIiwgInBhdGgiLCAicHJvY2VzcyIsICJkYXlqcyIsICJwYXRoIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicHJvY2VzcyIsICJmcyIsICJwYXRoIiwgImRheWpzIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
