import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})