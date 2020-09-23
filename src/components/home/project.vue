<template>
  <div class="project-container">
    <div
      v-for="(item, index) in projects"
      :key="index"
      class="project"
    >
      <div class="project-banner">
        <h2 v-text="item.heading"></h2>
      </div>
      <div class="description">
        <p v-text="item.description"></p>
      </div>
      <div class="btn-container">
        <router-link
          :to="{name: item.routeName}"
          tag="button"
          v-text="item.button"
        ></router-link>
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
};
</script>

<style scoped>

.project-container {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  justify-content: space-between;
}

.project {
  position: relative;
  width: 350px;
  height: 400px;
  box-shadow: 0 25px 70px -12px rgba(0, 0, 0, 0.25);
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

h2 {
  font-weight: 500;
}

.description {
  width: 90%;
  margin: auto;
  padding-top: 5px;
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

@media only screen and (max-width: 1025px){
  .project-container {
    width: 100%;
    grid-template-columns: repeat(auto-fill, 275px);
    grid-column-gap: 30px;
    justify-content: center;
  }

  .project {
    width: 275px;
    height: 300px;
  }
}

</style>
