import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 全局样式
import '@/assets/css/index.less';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
