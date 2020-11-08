import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import loader from './libs/global-components/Loader.vue';

import './css/components/navigation.css';
import './css/main.css';

//global components
Vue.component('loader', loader);

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
