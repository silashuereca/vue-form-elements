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
      </div>
    </section>
  </div>
</template>

<script>
export default {
	name: 'AddProject'
}
</script>