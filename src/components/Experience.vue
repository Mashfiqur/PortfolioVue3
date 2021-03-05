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
          company: "Amin Travels & Tours",
        },
        {
          id: '2',
          company: "Evident BD",
        },

      ]
    };
  }
};
</script>

<style>

</style>