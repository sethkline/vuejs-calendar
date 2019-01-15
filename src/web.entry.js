import Vue from 'vue';
import './style.scss';
import moment from 'moment-timezone';
import App from './components/App.vue';

moment.tz.setDefault('UTC');// Sets TimeZone
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

new Vue({
  el: '#app',
    data: {
      moment
    },
  components: {
    App
  }
});
