<template>
  <nav id="navbar" class="nav-container navbar-fixed-top">
    <ul class="nav" style="margin-top: -55px !important">
      <li class="">
        <router-link class="nav-link logo" to="/">
          <span
            ><img src="/images/mash1.png" alt="Mashfiqur Rahman" width="120"
          /></span>
        </router-link>
      </li>
      <li class="nav-item ml-2" v-for="link in links" :key="link.id">
        <router-link class="nav-link" :to="link.url">
          <i class="menu-icon" :class="link.icon"></i>
          <span class="" style="text-decoration: underline solid black !important; text-underline-offset:2px;">{{ link.text }}</span>
          
        </router-link>
      </li>
      <a
        class="flat-butt flat-info-butt flat-info-grad-butt"
        download="Mashfiqur_Rahman.docx"
        @click="downloadCV( '/files/Cv_Md.Mashfiqur_Rahman.docx', 'Mashfiqur_Rahman.docx' )"
        >Download CV/ Resume</a
      >
    </ul>
  </nav>
</template>



<script>
export default {
  data() {
    return {
      url:'/files/Cv_Md.Mashfiqur_Rahman.docx',
      links: [
        {
          id: 1,
          icon: "fab fa-react",
          text: "Home",
          url: "/",
        },
        {
          id: 2,
          icon: "fab fa-angular",
          text: "Education",
          url: "/education",
        },
        {
          id: 3,
          icon: "fab fa-vuejs",
          text: "Experience",
          url: "/experience",
        },
        {
          id: 4,
          icon: "fab fa-js",
          text: "Skills",
          url: "/skills",
        },
        {
          id: 5,
          icon: "fab fa-html5",
          text: "Projects",
          url: "/projects",
        },
        {
          id: 6,
          icon: "fab fa-css3-alt",
          text: "Personal Info",
          url: "/personal",
        },
        {
          id: 7,
          icon: "fab fa-js",
          text: "References",
          url: "/reference",
        },
        {
          id: 8,
          icon: "fab fa-js",
          text: "Contact",
          url: "/contact",
        },
      ],
    };
  },
  methods: {
    downloadCV ( url, label ) {
    this.axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/docx' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
  }  
  },
};
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* .nav-container {
  background-color: lightblue;
} */
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
.nav-container .hambergur-menu .bar:after,
.nav-container .hambergur-menu .bar:before {
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
.flat-butt {
  display: inline-block;
  text-decoration: none !important;
  margin: 0 5px;
  border-radius: 6px;
  font-family: "Lato", sans-serif;
  font-size: 16.5px;
  padding: 3px 10px;
  border: 0;
  background: #34495e;
  color: #fff;
  cursor: pointer;
  outline: 0;
}
.flat-butt:hover {
  background: #005580;
}

.flat-info-butt {
  background: #3498db;
}
.flat-info-butt:hover {
  background: #5dade2;
}
.flat-info-grad-butt {
  background-image: linear-gradient(#3498db 50%, #2980b9 50%);
}
</style>








