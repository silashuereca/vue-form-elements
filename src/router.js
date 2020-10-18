import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Forms from './views/categories/Forms.vue';
import UserProject from './views/User-Project.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/forms', name: 'forms', component: Forms },
	{ path: '/forms/:repo/:username', name: 'userProject', component: UserProject },
	{ path: '/user-search'}
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
});

export default router;