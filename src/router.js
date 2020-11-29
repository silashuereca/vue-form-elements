import Vue from 'vue';
import VueRouter from 'vue-router';

//route components
import Home from './views/Home.vue';
import UserProject from './views/User-Project.vue';

//Contribute
import Contribute from './views/Contribute.vue';
import AddProject from './views/contribute/Add-Project.vue';
import BugFix from './views/contribute/Bug-Fix.vue';
import NewFeature from './views/contribute/New-Feature.vue';

//category components
import Forms from './views/categories/Forms.vue';
import Games from './views/categories/Games.vue';
import A11y from './views/categories/A11y.vue';
import Animations from './views/categories/Animations.vue';
import UIUX from './views/categories/UIUX.vue';
import Performance from './views/categories/Performance.vue';

Vue.use(VueRouter);

const routes = [
	//Home
	{ path: '/', name: 'home', component: Home },
	
	//Contribute
	{
		path: '/contribute', name: 'contribute', component: Contribute, children: [
			{path: 'add-project', name: 'addProject', component: AddProject},
			{path: 'bug-fix', name: 'bugFix', component: BugFix},
			{ path: 'new-feature', name: 'newFeature', component: NewFeature },
			{ path: '*', redirect: 'add-project'}
		]
	},
	
	{ path: '/:category/:repo/:username', name: 'userProject', component: UserProject },

	//categories
	{ path: '/forms', name: 'forms', component: Forms },
	{ path: '/games', name: 'games', component: Games },
	{ path: '/animations', name: 'animations', component: Animations },
	{ path: '/uiux', name: 'UI/UX', component: UIUX },
	{ path: '/a11y', name: 'A11Y', component: A11y },
	{ path: '/performance', name: 'performance', component: Performance },

	{ path: '/*', redirect: '/'}
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'active-link',
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
});

export default router;