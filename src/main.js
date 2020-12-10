import Vue from 'vue'
import App from './components/App.vue'
import router from './router/index';
import './assets/reset.css';
//import VinylApiService from './services/api.service';
import TokenService from "@/services/token.service";
import store from './store/index';
import dotnet from 'dotenv';

dotnet.config();

//VinylApiService.init(process.env.VINYL_API_BASE);

if (TokenService.getToken()) {
  //VinylApiService.setHeader()
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');