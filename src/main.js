import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// sha256
import sha256 from 'js-sha256';
Vue.prototype.$sha256 = sha256

// global config
import global_ from './components/Global.vue'
Vue.prototype.GLOBAL = global_

Vue.config.productionTip = false

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
Vue.use(BootstrapVue)

// Vue-Resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// cookies
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

// GA
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-167881827-2',
  router,
  checkDuplicatedScript: true
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
