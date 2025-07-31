import { createApp } from 'vue'
import './assets/tailwind.css'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
