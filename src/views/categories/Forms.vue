<template>
  <div class="projects">
    <div class="banner">
      <div class="heading">
        <h1>Forms</h1>
        <p>
          Whether it's validation, readability, or re-usability, forms can provide a fantastic user experience if built right. With proper engineering, forms can also be well maintained and reusable for the development side.
        </p>
      </div>
    </div>
    <project-list v-bind:projects="allData.forms"></project-list>
    <div class="spacer-md"></div>
  </div>
</template>

<script>
import {allData} from '../../data/all-data.js';
import ProjectList from '../components/ProjectList.vue';

export default {
	name: 'Forms',
	components: {
		ProjectList
	},
	data: function(){
		return {
			allData
		}
	},
};
</script>

<style scoped>
@import '../../css/components/project-list.css';
</style>
