import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import createStore from './store'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = createStore();

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
