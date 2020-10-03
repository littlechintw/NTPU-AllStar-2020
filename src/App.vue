<template>
  <v-app>
    <b-navbar class="navbar navbar-custom" toggleable="lg" type="dark" style="background-color: #DAAA49;">
      <b-navbar-brand href="/">NTPU ALLSTAR 2020</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="/rules">規則</b-nav-item> -->
          <b-nav-item href="/vote" style="font-color:white;color: white;">投票</b-nav-item>
          <b-nav-item href="/leaderboard" style="font-color:white;color: white;">排行榜</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <div class="login" v-if="login_show">
              <b-nav-item style="font-color:white;">{{ who }}</b-nav-item>
            </div>
            <div class="login" v-if="login_show">
              <b-nav-item href="/logout" style="font-color:white;color: white;">登出 / Logout</b-nav-item>
            </div>
            <div class="init" v-if="!login_show">
              <b-nav-item href="/login" style="font-color:white;color: white;">登入 / Login</b-nav-item>
            </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <v-content style="background-color: #e9e8e6;">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <!-- <br> -->
            <v-row align="center" justify="center">
              <router-view></router-view>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer padless class="font-weight-medium" style="background-color: #adb9c4;">
      <v-col class="text-center" cols="12" style="font-size: 14px;">
        &copy; {{ new Date().getFullYear() }} Copyright <a href='https://littlechintw.github.io'>littlechintw.github.io</a>. All rights reserved.
      </v-col>
    </v-footer>

    <div class="position">
      <b-button pill href="#top" style="color:white;background-color: #DAAA49;">
        ︿
      </b-button>
    </div>
  </v-app>
</template>

<script>
let Base64 = require('js-base64').Base64
export default {
  data: () => ({
    login_show: false,
    who: '',
  }),
  methods: {

  },
  created: function () {
    if(this.$cookie.get('session')){
      if(this.$cookie.get('stu_id')){
        this.login_show = true
        this.who = Base64.decode(this.$cookie.get('stu_id'))
      }
      // this.$router.push("../panel");
    }
    else{
      this.login_show = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-custom {
    background-color: #ff5500;
}
.position {
	width:80px;
	height:60px;
	position : fixed;
	/* 定位在最上層 */
	bottom : 0;
  right : 0;
	
	/*
	選擇定位位置
	top : 0;
	left : 0;
	bottom : 0;
	right : 0;
	*/
}
</style>