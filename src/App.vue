<template>
  <div id="app">

    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavbarNew.vue'

export default {
  name: 'App',
  components: {
    Navbar
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
  margin-top: 60px;
}
/* body, html {
  height: 100%;
} */

html { 
  /* background:  url('https://i.gifer.com/2DYg.gif') no-repeat center center fixed;  */
  background:  url('/images/background3.jpg') no-repeat center center fixed; 
  
  background-size: cover;
}

body {
    height: 100%;
    
}


.bg {
  /* The image used */
  background-image: url("https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
