<template>
<div class="project-container">
  <div class="project" v-for="(item, index) in projects" v-bind:key="index">
    <div class="project-banner">
      <h2 v-text="item.heading"></h2>
    </div>
    <div class="description">
      <p v-text="item.description"></p>
    </div>
    <div class="btn-container">
    <router-link v-bind:to="{name: item.routeName}" v-text="item.button" tag="button"></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    projects: {
      type: Array,
      default: (() => []),
    },
  },
  created() {
    console.log('component', this.projects);
  },
};
</script>

<style scoped>

.project-container {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project {
  position: relative;
  width: 275px;
  height: 300px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 100px;
}

.project-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
}

.description {
  width: 90%;
  margin: auto;
  padding-top: 10px;
  text-align: center;
}

.btn-container {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 20px;
}

button {
  width: 80%;
  padding-top: 11px;
  padding-bottom: 11px;
  border: none;
  background-color: var(--primary);
  color: var(--white);
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

</style>
