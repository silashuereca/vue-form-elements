<template>
  <div>
    <div class="banner">
      <div class="heading">
        <h1>Vue Cave</h1>
        <p>A place for all things Vue</p>
      </div>
      <!-- TODO: cool vue animation needs to go here -->
    </div>
    <categories :projects="projects"></categories>
    <div class="spacer-md"></div>
  </div>
</template>

<script>
import { projectRouts } from '../data/category-list';
import categories from '../components/home/categories.vue';

export default {
	name: 'Home',
	components: {
		categories
	},
	data() {
		return {
			projects: projectRouts
		};
	},
};
</script>

