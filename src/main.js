import { createApp } from 'vue'
import './styles/main.css'
import Toast from 'vue-toastification'
import App from './App.vue'
import 'vue-toastification/dist/index.css'

import initializeRouter from './router'

const app = createApp(App)

initializeRouter(app)

app.use(Toast, {
  position: 'top-right',
  timeout: 3000, // Duration in milliseconds
})

app.mount('#app')
