<template>
  <div class="glass">
    <VueSlickCarousel v-bind="settings">
      <div class="d-flex" v-for="i in images" :key="i.id">
        <img width="20%" class=" d-flex image-fluid" :src="i.image" />
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'PersonalSlider',
    components: { VueSlickCarousel },
    data() {
    return {
      images: [
      {
        id: 1,
        image:"images/football.jpg",
      },
      {
        id: 2,
        image:"images/cricket.jpg",
      },
      {
        id: 3,
        image:"images/tennis.jpg",
      },
      {
        id: 4,
        image:"images/music.jpg"
      },
      {
        id: 5,
        image:"images/math.jpg",
      } 
      ],

      settings: {
          arrows: false,
          dots: true,
          autoplay:true,
          slidesToShow: 4,
          speed: 500,
          pauseOnHover: true,
    
        },
    };
  },
  }
</script>
<style>
.glass {
  background-color: rgba(20, 20, 20, 0.8);
  color: rgb(243, 241, 239);
}
</style>
