<template>
  <div id="app">
	    <header>
			<nav>
				<v-app id="inspire">
					<v-navigation-drawer floating dark>
						<div class="imgFidem">
							<img src="http://findplaces.net/sites/default/files/787/2152/1387871748119093img.jpg" align="center" alt="">
						</div>
						<v-list dense class="pt-0">
							<v-list-tile v-for="item in items" :key="item.title" v-on:click="" :to="item.title">
								<v-list-tile-action>
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title>
										<router-link to="">{{ item.title }}</router-link>
									</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list>
					</v-navigation-drawer>
				</v-app>
			</nav>
		</header>
		<section class="routerSection">
			<transition name="fade">
				<router-view/>
			</transition>
		</section>
  </div>
</template>


<script>

import axios from 'axios';
import Vue from 'vue'
export default {
  name: 'app',
  data(){
	  return{
		catArray: [],
		items: [
			{ title: 'Dashboard', icon: 'dashboard' },
			{ title: 'Product', icon: 'dialpad' },
			{ title: 'Admin', icon: 'gavel' }
		],
		right: null,
		dialog: false
	  }
  },  
  created:function(){

  },
  methods: {
	
	}
}
</script>
<style>
@import '../node_modules/vuetify/src/stylus/main.styl';

    *{
		margin: 0px;
		padding: 0px;
    }
    body{
		padding: 0px !important;
		margin: 0px !important;
		background: url("http://cdn.wallpapersafari.com/27/86/r0ebLt.jpg");
	}
	.application{
		min-height: inherit !important;
	}
	.imgFidem{
		padding-bottom: 50px;
		text-align: center;
	}
	.routerSection{
		margin-left: 255px;
		margin-right: 5px;
	}
	.dropdown{
		padding: 20px 20px;
	}

	.application .theme--dark.navigation-drawer{
		height: 100% !important;
		margin-top: 0px !important;
		width: 250px !important;
	}
	.navigation-drawer::-webkit-scrollbar-track
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
		background-color: transparent;
	}
	.navigation-drawer::-webkit-scrollbar
	{
		width: 15px;
		background-color: transparent;
	}
	.navigation-drawer::-webkit-scrollbar-thumb
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
		background-color: aliceblue;
	}
	.application--light{
		background: transparent !important;
	}
	.application--light .card{
		background: transparent !important;
	}
</style>