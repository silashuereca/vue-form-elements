<template>
  <div>
    <div class="banner">
      <div class="heading">
        <h1>Vue Cave</h1>
        <p>Welcome to Vue Cave, an open source platform aiming to host documented projects that are primarily built with Vue or just vanilla JavaScript.</p>
      </div>
      <!-- TODO: cool vue animation needs to go here -- probably in the second phase -->
    </div>
    <categories v-bind:projects="projects"></categories>
    <div class="spacer-md"></div>
  </div>
</template>

<script>
import { projectRouts } from '../data/category-list';
import categories from '../components/home/categories.vue';

export default {
	name: 'Home',
	components: {
		categories,
	},
	data() {
		return {
			projects: projectRouts
		};
	},
};
</script>

