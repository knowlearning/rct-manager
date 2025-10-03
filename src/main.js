import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import './style.css'
import App from './app.vue'

window.Agent = Agent

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: { fa }
  }
})

createApp(App)
  .use(vuetify)
  .mount('#app')
