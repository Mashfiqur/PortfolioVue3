<template>

    <div class="container mt-4">
      <div class="row">
            <div
            class="col-md-6 col-lg-4 pb-3"
            v-for="experience in experiences"
            v-bind:key="experience.id"
            >
            <single-experience :data="experience" />
            </div>
      </div>
    </div>

</template>

<script>
import SingleExperience from "./single-experience.vue";

export default {
  name: "Experience",
  components: { SingleExperience },
  data() {
    return {
      experiences: [
        {
          id: '1',
          title: 'Software Engineer',
          company: "Amin Travels & Tours",
          image: 'images/amin.jpeg',
          address: '131, DIT Extension Road Fakirapool 1100 Dhaka, Dhaka Division, Bangladesh',
          duration: 'November 2019 - July 2020',
          responsibility:[
            'Design the architecture of web application',
            'Build an inventory system',
            'Design the whole Database',
            
          ]
            
          
        },
        {
          id: '2',
          title: 'Software Engineer',
          company: "Westace BD",
          image: 'images/westace.png',
          address:'Mashru Cottage, House: 23, Road: 3/C, Sector: 9 Dhaka, 1230',
          duration: 'August 2020 - Present',
          responsibility:[
            'Design the architecture of web application',
            'Build an inventory system, Attendance Keeper, Manage Ecommerce Platform',
            'Write complex queries in SQL',
            'Add feature of creating invoice for their customers',
            'Design frontend',
            'Design backend with PHP'

          ]

        },

      ]
    };
  }
};
</script>

<style>

</style>