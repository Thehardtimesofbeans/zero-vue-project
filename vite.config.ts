import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
// import Unocss from 'unocss/vite'
import Unocss from './config/unocss'

const rollupOptions = {
  // 将该模块保留在bundler之外，比如在数组中添加了vue，就是为了不让vue打包到组件库中
  external: ['vue', 'vue-router'],
  // 这个配置用于umd/iffe包中，意思是全局中的某个模块在组件库中叫什么名字
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    // 添加UnoCSS插件
    Unocss(),
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'  混淆的压缩工具
    sourcemap: true, // 输出单独source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'VueMui',
      fileName: 'Vue-Mui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife'], // 导出的模块类型
    },
  },

  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      // 支持tsx组件，很关键
      web: [/.[tj]sx$/],
    },
  },
})