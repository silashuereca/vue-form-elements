<template>
  <div class="home">
    <div  class="links-wrapper">
      <div id="nav-container" class="links">
      <router-link v-bind:to="{name: 'projects'}" class="link-divider">Projects</router-link>
      <router-link v-bind:to="{name: 'about'}">About</router-link>
      </div>
    </div>
    <div class="intro-container">

      <div class="wording-container">
        <h1>Vue Cave</h1>
        <p>It's a place to learn more complex concepts of Vue
          and to ultimately become a better front-end developer.
          This site is aimed towards bringing to light the many complexities
          of front-end development and all the little things that matter.
          So, welcome to the Vue Cave and I hope you enjoy your stay :)</p>
      </div>
    </div>
    <footer>
      <p>create by Silas Huereca</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style scoped>
  #home {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .links-wrapper {
    width: 100%;
    text-align: center;
  }

  #nav-container {
    padding-top: 30px;
  }

  #nav-container a {
    font-size: 25px;
    padding-right: 15px;
    padding-left: 15px;
    font-style: none;
    color: #fff;
    text-decoration: none;
  }

  #nav-container a:hover {
    color: #42b983;
  }

  .link-divider {
    border-right: 1px solid black;
  }

  .intro-container {
    width: 100%;
    margin-top: 10rem;
    text-align: center;
  }

  .wording-container {
    margin: auto;
    width: 600px;
  }

  footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  footer p {
    text-align: center;
  }

  h1 {
    color: #42b983;
  }

  p {
    color: #fff;
    font-size: 18px;
  }

  @media only screen and (max-width: 850px){
    .intro-container {
      text-align: center;
    }

    .wording-container {
      margin-left: 0;
      width: 95%;
      margin: auto;
    }
  }

  @media only screen and (max-height: 670px){
      .intro-container {
      margin-top: 6rem;
    }
  }

  @media only screen and (max-height: 600px){
      .intro-container {
      margin-top: 4rem;
    }
  }
</style>
