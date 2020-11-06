<template>
  <nav>
    <div class="nav-container">
      <div class="logo-container">
        <div class="logo">
          <router-link to="/">
            VC
          </router-link>
        </div>
      </div>
      <div class="nav-bts-container">
        <router-link class="home link" to="/">
          Home
        </router-link>
        <router-link class="home link" v-bind:to="{name: 'home', query: {categories: 'true'}}">
          Categories
        </router-link>
        <a ref="noopener" class="link" href="https://github.com/silashuereca/vue-cave" target="_blank">Contribute</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
	name: 'Naviation'
}
</script>