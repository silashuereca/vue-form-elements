<template>
<div>
  <div class="banner">
    <div class="heading">
      <h1>Vue Cave</h1>
    </div>
  </div>
  <project v-bind:projects="projects"></project>
  <div class="about">
    <h1>About</h1>
    <p>
      Nowadays I feel as if most want to be knowledgeable
      in many fields but never a master in one particular area.
      That is why I am creating this platform because I want to be
      an expert in front-end development. I also want other upcoming
      front-end developers to understand there is more than just your
      todo app.
      <br/>
      <br/>
      <span class="spacer"></span>
      Front-end development is a complex topic once you consider a lot
      of issues that can come to the performance of web applications,
      accessibility, and how the user feels when they enter and leave your site.
      So enjoy your stay and I hope you learn a thing or two as I have!
    </p>
  </div>
</div>
</template>

<script>
import { projectRouts } from '../js/project-links';
import project from '../components/home/project.vue';

export default {
  name: 'home',
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

.about {
  margin: auto;
  margin-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about h1 {
  font-size: 2rem;
  color: var(--dark);
}

.about p {
  font-size: 25px;
  width: 75%;
  text-align: center;
  color: var(--dark);
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
