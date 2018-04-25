import Vue from 'vue/dist/vue.esm';

const ButtonClicker = Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});


export default ButtonClicker;