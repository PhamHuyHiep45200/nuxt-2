// plugins/vue2-google-maps.js
import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCNbIlN-9wB7Evh2hjksGtV6nDIhlyfiqs',
    libraries: 'places',
  },
})