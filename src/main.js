// import Vue from 'vue'
// import App from './App.vue'
var Vue = require('vue'); 
var App = require('./app.vue');

new Vue({
  el: '#app',
  render: h => h(App)
})
