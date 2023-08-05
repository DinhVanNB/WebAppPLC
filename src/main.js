import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import router from './router'



const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')
