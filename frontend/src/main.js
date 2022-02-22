import axios from 'axios'

import { createApp, h } from 'vue'
import VueAxios from 'vue-axios'

import hljs from 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'highlight.js/styles/github-dark.css'
import 'highlight.js/lib/common'
import '../assets/css/app.css'
import Kuberos from './kuberos.vue'


const app = createApp({
  el: '#app',
  render: () => h(Kuberos)
})

app.use(VueAxios, axios)
app.use(hljsVuePlugin)
app.use(ElementPlus)
app.mount('#app')
