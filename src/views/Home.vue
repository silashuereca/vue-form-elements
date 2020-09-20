<template>
<div>
  <div class="banner">
    <div class="heading">
      <h1>Vue Cave</h1>
      <p>more than a todo app</p>
    </div>
    <vanimation></vanimation>
  </div>
  <project v-bind:projects="projects"></project>
</div>
</template>

<script>
import { projectRouts } from '../js/project-links';
import project from '../components/home/project.vue';
import vanimation from '../components/animations/v-animation.vue';

export default {
  name: 'home',
  components: {
    project,
    vanimation,
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
  padding-bottom: 40px;
  background-color: var(--primary);
  display: flex;
  justify-content: flex-end;
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

  .about p {
    width: 85%;
  }

}
</style>
