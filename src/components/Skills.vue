<template>
  <div class="container mt-4">
      <div class="row"  v-for="skl in skills" v-bind:key="skl.id">
            
            <single-skill :skill="skl" />
            
      </div>
    </div>
</template>

<script>
import SingleSkill from "./single-skill.vue";
export default {
  name: "Skills",
  components: { SingleSkill },
  data() {
    return {
      skills: [
        {
          id: "1",
          name: "HTML",
          percentage: "95",
          width: 'width:95%'
        },
        {
          id: "2",
          name: "CSS",
          percentage: "80",
          width: 'width:80%'
        },
        {
          id: "3",
          name: "PHP",
          percentage: "85",
          width: 'width:85%'
        },
        {
          id: "4",
          name: "Bootstrap",
          percentage: "82",
          width: 'width:82%'
        },
        {
          id: "5",
          name: "Javascript",
          percentage: "80",
          width: 'width:80%'
        },
        {
          id: "6",
          name: "JQuery",
          percentage: "85",
          width: 'width:85%'
        },
        {
          id: "7",
          name: "GIT",
          percentage: "90",
          width: 'width:90%'
        },
      ],
    };
  },
}
</script>

<style>

</style>