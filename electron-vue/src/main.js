import Vue from 'vue'
import App from './App.vue'
import VueHtml2Canvas from 'vue-html2canvas';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLinkedin, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueHtml2Canvas);
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
