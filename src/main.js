import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'boxicons';
import 'boxicons/css/boxicons.css'
import '@/index.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import router from './router';
import store from './store';
import Auth from '@/utils/auth';
import './component';

Vue.use(Vuesax, {
})

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener("load", () => {
  Auth.login();
});

export default app;