<template>
  <div>
    <nav>
      <div class="menu-container">
        <div class="logo-container">
          <div class="logo">
            <router-link to="/">
              VC
            </router-link>
          </div>
        </div>
        <div>
          <button type="button" @click="toggleMenu()">
            Menu
          </button>
        </div>
      </div>
    </nav>
    <div ref="overlay" class="overlay-menu">
      <button type="button" @click="toggleMenu()">
        X
      </button>
      <div class="overlay-content">
        <router-link to="/" @click.native="toggleMenu(true)">
          Home
        </router-link>
        <a ref="noopener" href="https://github.com/silashuereca/vue-cave" target="_blank">Contribute</a>
        <router-link v-for="(value, name) in routerLinks" v-bind:key="name" v-bind:to="{name: `${name}`}" @click.native="toggleMenu(true)" v-text="capFirstLetter(name)"></router-link>
      </div>
    </div>
    <div v-show="back" class="fixed-back-container">
      <div class="back-btn-container">
        <a href="javascript:history.go(-1)">Back</a>
      </div>
    </div>
  </div>
</template>

<script>
import {allData} from '../../data/all-data.js';
import {capFirstLetter} from '../../libs/helpers.js';

export default {
	name: 'Naviation',
	data: function(){
		return {
			menu: false,
			routerLinks: allData,
			back: false,
			//filter
			capFirstLetter
		}
	},
	watch: {
		$route(to){
			if(to.path !== '/'){
				this.back = true
				return;
			}
      
			this.back = false;
		}
	},
	mounted(){
		if(this.$route.path !== '/'){
			this.back = true;
		}
	},
	methods: {
		toggleMenu(close){
			this.menu = !this.menu;
      
			if(this.menu){
				this.$refs.overlay.style.width = '100%';
			}

			if(!this.menu || close){
				this.$refs.overlay.style.width = '0%';
			}
      
			
		}
	}
}
</script>