<template>
  <div class="home-container">
    <div class="box">
      <div class="left-container">
        <h1>Vue Cave</h1>
      </div>
      <div class="right-container">
        <div class="inner-right-box">
          <p>
          Vue is a brilliant framework.
          The possibilities are endless and it makes front-end development enjoyable!
          </p>
        <div class="buttons-container">
          <div>
          <router-link class="btn" v-bind:to="{name: 'projects'}" tag="button">
            Projects
          </router-link>
          </div>
          <div>
          <router-link class="btn bottom-btn" v-bind:to="{name: 'about'}" tag="button">
            About
          </router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style scoped>

.home-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  background-color: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
}

.left-container {
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1dd1a1;
}

h1 {
  color: #fff;
}

.right-container {
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inner-right-box {
  padding: 10px;
}

.buttons-container {
  padding-top: 20px;
}

.btn {
  width: 55%;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #1dd1a1;
  transition: all 0.1s ease-in-out;
  color: white;
  font-size: 18px;
}

.btn:hover {
  background-color: #10ac84;
}

.bottom-btn {
  margin-top: 20px;
}

@media only screen and (max-width: 800px){
  .box {
    display: block;
  }

  .left-container {
    height: 225px;
  }

  .btn {
    width: 70%;
  }
}

@media only screen and (max-width: 500px){
  .left-container {
    width: 350px;
  }

  .right-container {
    width: 350px;
  }
}

@media only screen and (max-width: 370px){
  .left-container {
    width: 300px;
    height: 200px;
  }

  .right-container {
    width: 300px;
  }
}
</style>
