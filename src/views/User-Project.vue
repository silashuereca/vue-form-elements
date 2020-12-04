<template>
  <div>
    <loader v-show="status === 'loading'"></loader>
    <!-- TODO: show fetch error message here -->
    <div v-show="status === 'idle'" class="markdown-body">
      <!-- eslint-disable-next-line -->
    	<div v-html="html"></div>
    </div>
  </div>
</template>

<script>
import {allData} from '../data/all-data.js';
import showdown from 'showdown';
import prettify from 'showdown-prettify';

export default {
	name: 'UserProject',
	data: function(){
		return {
			status: 'idle',
			html: null
		}
	},
	beforeRouteUpdate(to, from, next){
		const valid = this.validateProject(to.params);
		if(valid){
			next();
			this.fetchData();
		}
	},
	mounted(){
		const valid = this.validateProject(this.$route.params);
		if(valid){
			this.fetchData();
			return;
		}
	},
	methods: {
		delayResponse(time){
			return new Promise(resolve => setTimeout(resolve, time))
		},
		async fetchData(){
			this.status = 'loading';
			await this.delayResponse(1000);
			return fetch(`https://api.github.com/repos/${this.$route.params.username}/${this.$route.params.repo}/readme`)
				.then(response => response.json())
				.then((results) => {
					const markdown = atob(results.content);
					const converter = new showdown.Converter();
					const html = converter.makeHtml(markdown);
					this.html = html;
				}).catch((error) => {
					//TODO: there needs to be an error shown to the user if this happens
					console.error('Error', error);
				}).finally(() => {
					this.status = 'idle';
				})
		},
		validateProject(route){
			// check if any of these projects have been contributed to this site if not they are not valid
			const category = allData[route.category];
			if(!category){
				return false;
			}

			const project  = category.find(item => item.repo_name === route.repo);
			const user = category.find(item => item.username === route.username);
			if(project && user){
				return true;
			}

			return false;
		}
	}
}
</script>

<style scoped>
@import '../css/components/markdown.css';

.markdown-body {
	width: 70%;
	margin: auto;
	padding-top: 150px;
}

@media only screen and (max-width: 800px){
	.markdown-body {
		width: 95%;
	}
}
</style>