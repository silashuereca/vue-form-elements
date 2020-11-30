<template>
  <div>
    <section class="step-container">
      <div class="step-box">
        <h2>1</h2>
      </div>
      <div class="step-actions">
        <h2>Documentation</h2>
        <h3>Required</h3>
        <p>
          Each project added requires a README file added to their project’s root directory that
          explains, in detail, how you built your project. This is so that other devs can come to
          Vue Cave and learn from your work! I highly recomend you use <a href="https://stackedit.io/app#" rel="noopener" target="_blank">StackEdit</a> to speed up your
          process for writing documentation. After you’re done, you can copy and paste your content in your README file!
        </p>
        <h3>Example:</h3>
        <p>Just take a look at <a rel="noopener" href="http://www.github.com/silashuereca/vue-cave" target="_blank">Vue Cave’s</a> repository and see where I placed the README file if you’re not sure where to place it.</p>
      </div>
    </section>
    <section class="step-container">
      <div class="step-box">
        <h2>2</h2>
      </div>
      <div class="step-actions">
        <h2>Create A Pull Request</h2>
        <h3>Fork Repository</h3>
        <p>Fork and clone <a rel="noopener" href="https://www.github.com/silashuereca/vue-cave" target="_blank">Vue Cave's</a> repository to your local computer. </p>
        <h3>Create Branch</h3>
        <p>Create a branch using this naming guidline to help pull request’s stay more specific:</p>
        <p class="example">
          project/GITHUB-USERNAME/PROJECT-NAME-HERE
        </p>
      </div>
    </section>
    <section class="step-container project-form">
      <div class="step-box">
        <h2>3</h2>
      </div>
      <div class="step-actions">
        <h2>Project Information</h2>
        <form v-show="content === 'no-content'" class="contribute-form" @submit.prevent="setContent()">
          <div class="flex between col-gap-1">
            <div class="form-group">
              <label for="username">Username:</label>
              <input id="username" v-model="form.username" placeholder="Github username...">
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <select id="category" v-model="form.category">
                <option value="" disabled>
                  Select a category
                </option>
                <option>Forms</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input id="title" v-model="form.title" placeholder="Title of your project...">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input id="description" v-model="form.description" placeholder="Overview of your project...">
          </div>
          <button type="submit" class="contribute-btn">
            Set Content
          </button>
        </form>
        <pre v-show="content === 'content-set'" v-text="form"></pre>
        <button v-show="content === 'content-set'" type="button" class="contribute-btn">
          Copy
        </button>
      </div>
    </section>
    <section class="step-container">
      <div class="step-box">
        <h2>4</h2>
      </div>
      <div class="step-actions">
        <h2>Test</h2>
      </div>
    </section>
    <section class="step-container">
      <div class="step-box">
        <h2>5</h2>
      </div>
      <div class="step-actions">
        <h2>Submit Pull Request</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
	name: 'AddProject',
	data: function(){
		return {
			form: {
				username: '',
				name: '',
				avatar_url: '',
				category: '',
				title: '',
				repo_name: '',
				date: '',
				description: ''
			},
			content: 'no-content'
		}
	},
	methods: {
		setContent(event){
			this.content = 'content-loading';
			fetch('https://api.github.com/users/' + this.form.username)
				.then(response => response.json())
				.then((results) => {
					this.form.name = results.name;
					this.form.avatar_url = results.avatar_url;
					this.content = 'content-set';
				}).catch((error) => {
					this.content = 'content-error';
					console.error('Error', error);
				})
		}
	}
}
</script>