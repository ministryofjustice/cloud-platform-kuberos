import { createApp, h } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jQuery from 'jquery'
import App from './App.vue'

window.jQuery = jQuery
window.$ = jQuery

const app = createApp({
  render: () => h(App)
})

app.use(VueAxios, axios)
app.mount('#app')
