<template>
  <div class="projects">
    <div class="banner">
      <div class="heading">
        <h1>Forms</h1>
        <p>
          Tooltips are text labels whose main purpose
          is to help and/or educate the user on how to use a feature,
          functionality or product element. In this system, tooltips are triggered by hover only.
        </p>
      </div>
    </div>
    <div class="spacer-md"></div>
    <div class="project-list-container">
      <div
        v-for="(item, index) in projectList"
        :key="index"
        class="project-card"
      >
        <div class="user-container">
          <img
            :src="item.image"
            alt="pic of silas"
          >
        </div>
        <div class="user-content">
          <h2 v-text="item.title"></h2>
          <p v-text="item.description"></p>
        </div>
      </div>
    </div>
    <div class="spacer-md"></div>
  </div>
</template>

<script>
import {projectList} from '../../data/forms-projects.js';
export default {
	name: 'Forms',
	data: function(){
		return {
			projectList
		}
	},
};
</script>

<style scoped>
@import '../../assets/css/project-list.css';
</style>
