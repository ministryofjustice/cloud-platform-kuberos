import { createApp, h } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jQuery from 'jquery'
import VueHighlightJS from 'vue-highlightjs'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import Kuberos from './kuberos.vue'

window.jQuery = jQuery
window.$ = jQuery

const app = createApp({
  el: '#app',
  render: () => h(Kuberos)
})

app.use(VueAxios, axios)
app.use(VueHighlightJS)
app.use(ElementPlus)
app.mount('#app')
