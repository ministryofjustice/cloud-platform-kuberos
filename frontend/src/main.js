
/* import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
});
*/

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Meta from 'vue-meta';
import VueHighlightJS from 'vue-highlightjs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/ocean.css';
import Kuberos from './kuberos.vue';


Vue.use(VueAxios, axios)
Vue.use(Meta);
Vue.use(VueHighlightJS)
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(Kuberos),
  template: '<Kuberos/>',
  components: {
    Kuberos
  }
});