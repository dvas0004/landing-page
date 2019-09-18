import Vue from 'vue'
import App from './App.vue'
import VueCytoscape from 'vue-cytoscape'
import { MdButton, MdContent, MdTabs, MdAvatar } from 'vue-material/dist/components'

import 'vue-cytoscape/dist/vue-cytoscape.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdAvatar)
Vue.use(VueCytoscape)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
