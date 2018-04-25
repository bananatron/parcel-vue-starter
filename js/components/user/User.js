import fs from 'fs';
import Vue from 'vue/dist/vue.esm';

export default Vue.component('user', {
  data: function() {
    return {}
  },
  created: function() {
    console.log('User', this.$router)
  },
  template: '<div>User {{ $route.params.id }}</div>',
});
