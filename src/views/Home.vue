<template>
  <div class="home-container">
    <div class="box">
      <div class="left-container">
        <h1>Vue Lab</h1>
      </div>
      <div class="right-container">
        <div class="inner-right-box">
          <p>
            A test lab for complex Vue projects will complete documentaion. <br> Enjoy :)
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
  overflow-y: hidden;
}

.box {
  display: flex;
  background-color: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6)
}

.left-container {
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #55efc4;
}

h1 {
  color: #000;
}

p {
  font-size: 18px;
  margin: 0;
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
  width: 75%;
}

.buttons-container {
  padding-top: 20px;
}

.btn {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #55efc4;
  transition: all 0.1s ease-in-out;
  color: #000;
  font-size: 18px;
}

.btn:hover {
  background-color: #00b894;
  color: #fff;
}

.bottom-btn {
  margin-top: 20px;
}

@media only screen and (max-width: 800px){
  .home-container {
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: -20%;
  }

  .box {
    display: block;
  }

  .left-container {
    height: 225px;
  }

  .btn {
    width: 100%;
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

@media only screen and (max-height: 667px){
  .home-container {
    margin-top: -10%;
  }
}

@media only screen and (max-height: 568px){
  .home-container {
    margin-top: 0%;
  }
}
</style>
