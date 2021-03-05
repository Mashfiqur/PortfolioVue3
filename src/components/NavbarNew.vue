<template>
  <nav id="navbar" class="nav-container">
  <ul class= "nav container" style="margin-top: -60px !important;">
<li class="">
      <a class="nav-link logo" href="#"><img src="http://www.elahekarami.ir/NLogo.png" alt="logo" width="80"/></a>
    </li>
    <li
      class="nav-item"
      v-for="link in links"
      :key="link.id"
    >
       <router-link  class="nav-link"
        :class="link.id === selectedIndex ? 'active' : null" :to=" link.url">
        <i class="menu-icon" :class="link.icon"></i>
        <span>{{ link.text }}</span>
        </router-link>

     
    </li>


  </ul>
  
  <div id="mobileMenu" class="hambergur-menu">
    <span class="bar"></span>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          icon: "fab fa-react",
          text: "Home",
          url: '/'
        },
        {
          id: 2,
          icon: "fab fa-angular",
          text: "Education",
          url: '/education'
        },
        {
          id: 3,
          icon: "fab fa-vuejs",
          text: "Experience",
          url: '/experience'
        },
        {
          id: 4,
          icon: "fab fa-html5",
          text: "Projects",
          url: '/projects'
        },
        {
          id: 5,
          icon: "fab fa-css3-alt",
          text: "Personal Info",
          url: '/personal'
        },
        {
          id: 6,
          icon: "fab fa-js",
          text: "References",
          url: '/reference'
        },
        {
          id: 7,
          icon: "fab fa-js",
          text: "Contact",
          url: '/contact'
        },
      ],
    };
  },
}
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.nav-container {
  background-color: #464646;
}
.nav-container .nav {
  list-style: none;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: start;
}
.nav-container .nav .nav-item {
  display: inline-block;
  font-size: 18px;
  padding: 0px 10px;
  position: relative;
}
.nav-container .nav .nav-item .nav-link {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.2s linear;
  position: relative;
  overflow: hidden;
}
.nav-container .nav .nav-item .nav-link:after {
  background: #fff;
  content: "";
  height: 155px;
  left: -75px;
  opacity: 0.2;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 20px;
  z-index: -10;
}
.nav-container .nav .nav-item .nav-link:not(.logo):hover {
  border: 1px solid #a5a5a5;
  transform: scale(1.1);
  box-shadow: 0 3px 6px rgba(255, 255, 255, 0.2);
}
.nav-container .nav .nav-item .nav-link:not(.logo):hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-container .nav .nav-item .nav-link.logo:hover:after {
  left: 140%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-container .hambergur-menu {
  display: none;
  width: 38px;
  height: 33px;
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  float: right;
  margin-right: 20px;
}
.nav-container .hambergur-menu .bar {
  display: inline-block;
  width: 28px;
  height: 3px;
  background-color: #ccc;
  position: relative;
}
.nav-container .hambergur-menu .bar:after, .nav-container .hambergur-menu .bar:before {
  content: "";
  position: absolute;
  width: 28px;
  height: 3px;
  background-color: #ccc;
  top: -8px;
  transition: all 0.5s linear;
}
.nav-container .hambergur-menu .bar:after {
  top: 8px;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  opacity: 0.9;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .fisrt-section {
  padding-top: 60px;
}

</style>