<template>
 <div>
    <div class="toggle-container" v-bind:class="{'close-toggle': toggle}">
      <button
        class="toggle-btn"
        v-text="toggle ? 'Menu' : 'close'"
        v-on:click="toggleBtn()"
        >
      </button>
      <div class="toggle-projects">
        <h1>Projects</h1>
        <slot></slot>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      toggle: false,
    };
  },
  mounted() {
    const width = window.innerWidth;
    if (width < 1024) {
      this.toggle = true;
    }
  },
  methods: {
    toggleBtn() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>

  h1 {
    color: #000;
  }

 .toggle-container {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 22%;
   height: 100vh;
   position: sticky;
   background-color: white;
   transition: all 1s ease-in-out;
 }

 .toggle-btn {
   position: absolute;
   color: #000;
   width: 60px;
   padding: 8px;
   background-color: #55efc4;
   border: none;
   top: 6%;
   right: -60px;
   cursor: pointer;
   outline: none;
   box-shadow: none;
 }

 .toggle-btn:hover {
   background-color: #00b894;
   color: #fff;
 }

 .close-toggle {
   position: absolute;
   left: -22.5%;
 }

 .toggle-projects {
   width: 90%;
   height: 95%;
 }

 /* media queries */
 @media only screen and (max-width: 1024px){
   .toggle-container {
     width: 35%;
   }

   .close-toggle {
     position: absolute;
     left: -35.5%;
   }
 }

 @media only screen and (max-width: 500px){
   .toggle-container {
     width: 70%;
   }

   .close-toggle {
     position: absolute;
     left: -70.5%;
   }
 }
</style>
