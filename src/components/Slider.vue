<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="d-flex" v-for="i in images" :key="i.id">
        <img width="40%" :src="i.image" />
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
        image:"https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
      },
      {
        id: 2,
        image:"https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
      },
      {
        id: 3,
        image:"https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
      },
      {
        id: 4,
        image:"https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
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
