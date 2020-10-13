<template>
  <div class="markdown-body">
    <div v-html="html"></div>
  </div>
</template>

<script>
import showdown from 'showdown';
import prettify from 'showdown-prettify';

export default {
	name: 'UserProject',
	data: function(){
		return {
			html: null
		}
	},
	mounted(){
		this.fetchData();
	},
	methods: {
		fetchData(){
			//TODO there needs to be a loading indicator
			return fetch(`https://api.github.com/repos/${this.$route.params.username}/${this.$route.params.repo}/readme`)
				.then(response => response.json())
				.then((results) => {
					const markdown = atob(results.content);
					const converter = new showdown.Converter({
						extensions: [prettify]
					});
					const html = converter.makeHtml(markdown);
					this.html = html;
				}).catch((error) => {
					//TODO: there needs to be an error shown to the user if it happens
					console.log('Error', error);
				})
		}
	}
}
</script>

<style scoped>
@import '../assets/css/markdown.css';

.markdown-body {
	width: 70%;
	margin: auto;
}

@media only screen and (max-width: 800px){
	.markdown-body {
		width: 95%;
	}
}
</style>