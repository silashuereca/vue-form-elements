import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import loader from './libs/global-components/Loader.vue';
import Vuelidate from 'vuelidate';

//css
import './css/components/navigation.css';
import './css/main.css';

//Vue tools
Vue.use(Vuelidate);

//global components
Vue.component('loader', loader);

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
