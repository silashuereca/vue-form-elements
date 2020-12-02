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
    <section class="step-container">
      <div class="step-box">
        <h2>3</h2>
      </div>
      <div class="step-actions">
        <h2>Project Information</h2>
        <form @submit.prevent="setContent()">
          <div v-show="content === 'no-content'">
            <div class="flex between col-gap-1">
              <div class="form-group">
                <label for="username">Username:</label>
                <input id="username" v-model="$v.form.username.$model" v-bind:class="{error: $v.form.username.$error}" placeholder="Github username...">
                <p v-show="$v.form.username.$error" class="error-message">
                  username is required
                </p>
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <select id="category" v-model="$v.form.category.$model" v-bind:class="{error: $v.form.category.$error}">
                  <option value="" disabled>
                    Select a category...
                  </option>
                  <option>Forms</option>
                </select>
                <p v-show="$v.form.category.$error" class="error-message">
                  category is required
                </p>
              </div>
              <div class="form-group">
                <label for="repo_name">Repository</label>
                <input id="repo_name" v-model="$v.form.repo_name.$model" v-bind:class="{error: $v.form.repo_name.$error}" placeholder="Your project's repository name...">
                <p v-show="$v.form.repo_name.$error" class="error-message">
                  This field is required
                </p>
              </div>
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input id="title" v-model="$v.form.title.$model" v-bind:class="{error: $v.form.title.$error}" placeholder="Title of your project...">
              <p v-show="$v.form.title.$error" class="error-message">
                title is required
              </p>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input id="description" v-model="$v.form.description.$model" v-bind:class="{error: $v.form.description.$error}" placeholder="Overview of your project...">
              <p v-show="$v.form.description.$error" class="error-message">
                description is required
              </p>
            </div>
            <button type="submit" class="contribute-btn">
              Set Content
            </button>
          </div>
        </form>
        <pre v-show="content === 'content-set'" v-text="form"></pre>
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
import {required} from 'vuelidate/lib/validators';

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
	validations: {
		form: {
			username: {required},
			category: {required},
			title: {required},
			repo_name: {required},
			description: {required}
		}
	},
	methods: {
		setContent(event){
			this.$v.$touch();
			if(this.$v.$invalid){return};
      
			this.content = 'content-loading';
			fetch('https://api.github.com/users/' + this.form.username)
				.then(response => response.json())
				.then((results) => {
					const date = new Date();
					const dateStamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
					this.form.name = results.name;
					this.form.avatar_url = results.avatar_url;
					this.form.date = this.setDate();
					this.content = 'content-set';
				}).catch((error) => {
					this.content = 'content-error';
					console.error('Error', error);
				})
		},
		setDate(){
			let today = new Date();
			const dd = String(today.getDate()).padStart(2, '0');
			const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			const yyyy = today.getFullYear();

			return today = mm + '/' + dd + '/' + yyyy;
		}
	}
}
</script>