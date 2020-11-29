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
        <div v-show="!menu">
          <button type="button" @click="toggleMenu($event)">
            <div class="menu-bar top"></div>
            <div class="menu-bar middle"></div>
            <div class="menu-bar bottom"></div>
          </button>
        </div>
      </div>
    </nav>
    <div v-show="menu" ref="overlay" class="overlay-menu">
      <button type="button" @click="toggleMenu($event, false)">
        X
      </button>
      <div class="overlay-content-container">
        <div class="overlay-content">
          <router-link to="/" @click.native="toggleMenu($event, true)">
            Home
          </router-link>
          <router-link class="contribute" v-bind:to="{name: 'addProject'}" @click.native="toggleMenu($event, true)">
            Contribute
          </router-link>
          <router-link
            v-for="(value, name) in routerLinks"
            v-bind:key="name"
            v-bind:to="{name: `${name}`}"
            v-bind:class="{'disable-link': !value.length}"
            @click.native="toggleMenu($event, true)"
          >
            <p v-text="capFirstLetter(name)"></p>
          </router-link>
        </div>
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
			back: false,
			routerLinks: allData,

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
		this.clickAway()
	},
	methods: {
		// Toggle the menu and back button
		toggleMenu(event, close){
			event.stopPropagation();
			this.menu = !this.menu;
      
			if(this.menu){
				this.back = false;
			}

			if(!this.menu || close){
				this.setBackButton();
			}
      
		},
		clickAway(){
			const overlay = this.$refs.overlay;
			document.addEventListener('click', (event) => {
				const isClickInside = overlay.contains(event.target);

				if(!isClickInside && this.menu){
					this.setBackButton();
					this.menu = false;
				}
			})
		},
		setBackButton(){
			if(this.$route.path !== '/'){
				this.back = true;
			}
		}
	}
}
</script>