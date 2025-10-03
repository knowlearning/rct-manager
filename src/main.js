import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
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
  directives
})

createApp(App)
  .use(vuetify)
  .mount('#app')
