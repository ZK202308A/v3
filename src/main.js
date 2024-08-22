import { createApp } from 'vue'
import App from './App.vue'
import routeConfig from './routers'


createApp(App)
.use(routeConfig)
.mount('#app')
