<template>
  <div>
    <div v-show="!$route.query.categories" class="banner">
      <div class="heading">
        <h1>Vue Cave</h1>
        <p>Welcome to an open source platform aiming to host documented projects that are primarily built with Vue!</p>
      </div>
      <!-- TODO: cool vue animation needs to go here -- probably in the second phase -->
    </div>
    <categories v-bind:categories="categories"></categories>
  </div>
</template>

<script>
import { projectRouts } from '../data/category-list';
import categories from './components/Categories.vue';

export default {
	name: 'Home',
	components: {
		categories,
	},
	data() {
		return {
			categories: projectRouts
		};
	},
};
</script>

