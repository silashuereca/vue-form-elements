<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <!-- TODO: need to create a footer -->
    <div class="spacer-md"></div>
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
