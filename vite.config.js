import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9896,
  },
  plugins: [
    vue(),
    basicSsl(),
    vuetify({ autoImport: true })
  ]
})
