import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import InfiniteLoading from 'vue-infinite-loading';
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//axios
Vue.use(VueAxios, axios)
//Vue-infinite-loading

Vue.use(InfiniteLoading, { props: {
  spinner: 'default',
  /* other props need to configure */
},
system: {
  throttleLimit: 500,
  /* other settings need to configure */
}, });
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
