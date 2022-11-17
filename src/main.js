import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

                            import './assets/css/styles.css'
import './assets/css/vendor.css' 
  import anime from 'animejs/lib/anime.es.js';
  // import Rellax from 'rellax/rellax.js'
   import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';
import { createMetaManager } from 'vue-meta'
const appInstance = createApp(App).use(router).use(createMetaManager()).use(anime).use(new Swiper()) ;
 

appInstance.mount('#top')
  
//237 6 94 71 57 55