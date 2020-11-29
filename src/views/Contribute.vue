<template>
  <div class="contribute-container">
    <div class="tabs-container">
      <router-link v-bind:to="{name: 'addProject'}" type="button" class="tab" v-bind:class="{active: $route.fullPath === '/contribute/add-project'}" tag="button">
        <h2>Add Project</h2>
      </router-link>
      <router-link v-bind:to="{name: 'bugFix'}" class="tab" v-bind:class="{active: $route.fullPath === '/contribute/bug-fix'}" tag="button">
        <h2>Bug Fix</h2>
      </router-link>
      <router-link v-bind:to="{name: 'newFeature'}" class="tab" v-bind:class="{active: $route.fullPath === '/contribute/new-feature'}" tag="button">
        <h2>New Feature</h2>
      </router-link>
    </div>
    <router-view v-bind:key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
	name: 'Contributre',
}
</script>

<style scoped>
@import '../css/components/contribute.css';
</style>