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
    <div class="spacer-md"></div>
    <!-- TODO: this needs to be a component -->
    <div class="project-list-container">
      <div v-for="(item, index) in projectList" v-bind:key="index" class="project-card">
        <div class="user-container">
          <div class="avatar-container">
            <img v-bind:src="item.image" alt="pic of silas">
          </div>
          <div class="username-container">
            <h3 class="username" v-text="item.name"></h3>
            <p class="project-date">
              <small v-text="item.date"></small>
            </p>
          </div>
        </div>
        <div class="project-info">
          <h4 v-text="limitString(item.title, 'heading')"></h4>
          <small class="content-description" v-text="limitString(item.description, 'description')"></small>
        </div>
        
        <div class="project-buttons-container">
          <div class="social">
            <a v-bind:href="item.social.github_url" target="_blank">
              <img src="../../assets/github.png" alt="Github icon">
            </a>
            <a class="social-left" v-bind:href="item.social.linkedin_url" target="_blank">
              <img src="../../assets/linkedin.png" alt="LinkedIn icon">
            </a>
          </div>
          <router-link v-bind:to="{name: 'userProject', params: {category: 'forms', repo: item.repo_name, username: item.username}}" tag="button">
            View
          </router-link>
        </div>
      </div>
    </div>
    <div class="spacer-md"></div>
  </div>
</template>

<script>
import {limitString} from '../../libs/helpers.js';
import {projectList} from '../../data/forms-projects.js';
export default {
	name: 'Forms',
	data: function(){
		return {
			projectList,
			//filter
			limitString
		}
	},
};
</script>

<style scoped>
@import '../../css/components/project-list.css';
</style>
