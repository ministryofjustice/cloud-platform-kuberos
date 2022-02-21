import axios from 'axios'

import { createApp, h } from 'vue'
import VueAxios from 'vue-axios'

import VueHighlightJS from 'vue-highlightjs'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '../assets/css/app.css'
import Kuberos from './kuberos.vue'


const app = createApp({
  el: '#app',
  render: () => h(Kuberos)
})

app.use(VueAxios, axios)
app.use(VueHighlightJS)
app.use(ElementPlus)
app.mount('#app')
