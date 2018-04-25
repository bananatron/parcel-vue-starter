import fs from 'fs';
import Vue from 'vue/dist/vue.esm';

const template = fs.readFileSync(__dirname + '/Navigation.html', 'utf8');

export default Vue.component('navigation', {
  data: function() {
    return {}
  },
  created: function() {
    console.log('Navigation', this.$router)
  },
  template: template,
  // template: "<nav>I'm a navigation</nav>"
});
