<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './views/components/Navigation.vue';

export default {
	name: 'App',
	components: {
		navigation
	}
}
</script>
