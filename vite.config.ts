import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import globalStyle from '@originjs/vite-plugin-global-style'
import components from 'unplugin-vue-components/vite'
import content from '@originjs/vite-plugin-content'
import pages from '@originjs/vite-plugin-pages'
import markdown from 'vite-plugin-md'
import federation from '@originjs/vite-plugin-federation'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src'),
    }],
  },
  assetsInclude: ['assets/**/*.jpg'],
  server: {
    fs: {
      strict: false
    }
  },
  plugins:[
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    globalStyle(),
    components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow typescript
      dts: true,
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    content(),
    pages(),
    markdown(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'http://localhost:3072/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: true,
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
      logger: true,
    }),
  ],
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: true,
  },
})
