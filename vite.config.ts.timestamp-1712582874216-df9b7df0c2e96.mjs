// vite.config.ts
import { loadEnv } from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/vite@4.3.7_@types+node@20.2.1_sass@1.62.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.3.7_vue@3.3.2/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/unplugin-auto-import@0.16.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.3.2/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.3.2/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { viteMockServe } from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@4.3.7/node_modules/vite-plugin-mock/dist/index.js";
import DefineOptions from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/unplugin-vue-define-options@1.3.5_vue@3.3.2/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import VueSetupExtend from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@4.3.7/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import path from "path";
import { createSvgIconsPlugin } from "file:///C:/Users/Administrator/Desktop/Project/vue-admin-main/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.3.7/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var vite_config_default = ({ command, mode }) => {
  let env = loadEnv(mode, process.cwd());
  return {
    base: "./",
    plugins: [
      VueSetupExtend(),
      DefineOptions(),
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        localEnabled: command === "serve"
      })
    ],
    resolve: { alias: { "@": path.resolve("./src") } },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },
    // 代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcUHJvamVjdFxcXFx2dWUtYWRtaW4tbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXFByb2plY3RcXFxcdnVlLWFkbWluLW1haW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9Qcm9qZWN0L3Z1ZS1hZG1pbi1tYWluL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIEBEZXNjcmlwdGlvbjogU3RheSBodW5ncnlcdUZGMENTdGF5IGZvb2xpc2hcbiAqIEBBdXRob3I6IEh1Y2NjdFxuICogQERhdGU6IDIwMjMtMDUtMTcgMTQ6MzI6MDJcbiAqIEBMYXN0RWRpdG9yczogSHVjY2N0XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTA2LTAyIDE3OjM3OjMwXG4gKi9cbmltcG9ydCB7IENvbmZpZ0VudiwgVXNlckNvbmZpZ0V4cG9ydCwgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnXG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vLyBcdTVGMTVcdTUxNjVzdmdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZ0V4cG9ydCA9PiB7XG4gIC8vIFx1ODNCN1x1NTNENlx1NTQwNFx1NzlDRFx1NzNBRlx1NTg4M1x1NEUwQlx1NUJGOVx1NUU5NFx1NzY4NFx1NTNEOFx1OTFDRlxuICBsZXQgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKVxuICByZXR1cm4ge1xuICAgIGJhc2U6ICcuLycsXG4gICAgcGx1Z2luczogW1xuICAgICAgVnVlU2V0dXBFeHRlbmQoKSxcbiAgICAgIERlZmluZU9wdGlvbnMoKSxcbiAgICAgIHZ1ZSgpLFxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICB9KSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgfSksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZTogeyBhbGlhczogeyAnQCc6IHBhdGgucmVzb2x2ZSgnLi9zcmMnKSB9IH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9zdHlsZXMvdmFyaWFibGUuc2Nzc1wiOycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gXHU0RUUzXHU3NDA2XHU4REU4XHU1N0RGXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICBbZW52LlZJVEVfQVBQX0JBU0VfQVBJXToge1xuICAgICAgICAgIHRhcmdldDogZW52LlZJVEVfU0VSVkUsXG4gICAgICAgICAgLy8gXHU5NzAwXHU4OTgxXHU0RUUzXHU3NDA2XHU4REU4XHU1N0RGXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFPQSxTQUFzQyxlQUFlO0FBQ3JELE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLFVBQVU7QUFFakIsU0FBUyw0QkFBNEI7QUFFckMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQW1DO0FBRWpFLE1BQUksTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDckMsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLFFBQzFELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNaLGNBQWMsWUFBWTtBQUFBLE1BQzVCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssS0FBSyxRQUFRLE9BQU8sRUFBRSxFQUFFO0FBQUEsSUFDakQsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osbUJBQW1CO0FBQUEsVUFDbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxDQUFDLElBQUksaUJBQWlCLEdBQUc7QUFBQSxVQUN2QixRQUFRLElBQUk7QUFBQTtBQUFBLFVBRVosY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsUUFDOUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
