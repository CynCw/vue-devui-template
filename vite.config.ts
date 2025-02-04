import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      dts: './src/components.d.ts',
      resolvers: [],
    }),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
      ],
    }),
  ],
})
