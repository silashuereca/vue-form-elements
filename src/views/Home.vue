<template>
<div>
  <div class="banner">
    <div class="heading">
      <h1>Front End Lab</h1>
      <p>More than a todo app</p>
    </div>
  </div>
  <project v-bind:projects="projects"></project>
</div>
</template>

<script>
import { projectRouts } from '../js/project-links';
import project from './project.vue';

export default {
  name: 'Home',
  components: {
    project,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.projects = projectRouts;
  },
};
</script>

<style scoped>

.banner {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: var(--primary);
}

.heading {
  position: absolute;
  bottom: 4rem;
  width: 90%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-size: 45px;
  font-weight: 800;
  color: var(--white)
}

p {
  font-size: 1.1rem;
  color: var(--white);
  width: 400px;
}

@media only screen and (max-width: 800px){
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .heading {
    position: relative;
    bottom: 0;
    margin-left: 0;
    width: 100%;
  }

  p {
    width: 100%;
    margin: auto;
  }
}
</style>
