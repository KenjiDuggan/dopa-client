import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/reset.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
