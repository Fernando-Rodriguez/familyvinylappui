import Vue from 'vue'
import App from './App.vue'
import router from './Router/index';
import './assets/reset.css';
//import ApiService from './Services/api.service';
import TokenService from "@/Services/token.service";
import store from './Store/index';
import dotnet from 'dotenv';

dotnet.config();

//ApiService.init(process.env.VINYL_API_BASE);

if (TokenService.getToken()) {
  //ApiService.setHeader()
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');