// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import ButtonAdd from '/ButtonAdd'
Vue.config.productionTip = false


/* eslint-disable no-new */

// Vue.component('buttonadd-component', ButtonAdd);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})