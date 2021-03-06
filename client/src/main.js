import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.css'
import store from '@/store/store'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(Vuetify)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})
