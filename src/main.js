import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueSplash from 'vue-splash';
import VuePageTransition from 'vue-page-transition'
import Model from 'v-model';
// import CKEditor from '@ckeditor/ckeditor5-vue2'
// install Swiper modules

Vue.use(vuetify);
Vue.use(VueSplash);
Vue.use(VueAwesomeSwiper);
Vue.use(VuePageTransition)
Vue.use(Model);
// Vue.use(CKEditor);

library.add(faUserSecret)
Vue.component('font-awesome-icon',FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // CKEditor,
  render: h => h(App)
}).$mount('#app');


//SameSite
document.cookie="safeCookie1=foo; Samesite=Lax";
document.cookie="safeCookie2=foo";
document.cookie="crossCookie=bar; Samesite=None;Secure";