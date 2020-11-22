import Vue from 'vue';
import VueRouter from 'vue-router';

//route components
import Home from './views/Home.vue';
import Forms from './views/categories/Forms.vue';
import UserProject from './views/User-Project.vue';
import Contribute from './views/Contribute.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/contribute', name: 'contribute', component: Contribute},
	{ path: '/forms', name: 'forms', component: Forms },
	{ path: '/:category/:repo/:username', name: 'userProject', component: UserProject },
	{ path: '/user-search' },
	{ path: '/*', redirect: '/'}
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