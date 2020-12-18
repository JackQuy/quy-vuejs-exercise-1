import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import { LayoutPlugin } from 'bootstrap-vue'

 const app = createApp(App)
 app.use(store)
//  app.use(LayoutPlugin)
app.mount('#app')
