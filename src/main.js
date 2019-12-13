
import Vue from 'vue';
import App from  './App.vue';
import './style/main.scss'
import {init} from './stage'

new Vue({
	render:h =>h(App)

}).$mount('#app')