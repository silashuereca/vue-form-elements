<template>
  <div class="project-list-container">
    <div v-for="(item, index) in projects" v-bind:key="index" class="project-card">
      <div class="user-container">
        <div class="avatar-container">
          <img v-bind:src="item.avatar_url" alt="User image">
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
        <div class="link-wrapper">
          <router-link v-bind:to="{name: 'userProject', params: {category: 'forms', repo: item.repo_name, username: item.username}}">
            Documentation
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {limitString} from '../../libs/helpers.js';

export default {
	name: 'ProjectList',
	props: {
		projects: {
			type: Array,
			default: (() => [])
		}
	},
	data: function(){
		return {
			//filter
			limitString
		}
	}
}
</script>