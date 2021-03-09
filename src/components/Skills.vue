<template>
  <div class="container mt-5 pt-5" style=" background:rgba(10,10,10,0.5) ;color: wheat;">
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
          name: "Laravel",
          percentage: "85",
          width: 'width:80%'
        },
        {
          id: "6",
          name: "SQL",
          percentage: "85",
          width: 'width:85%'
        },
        {
          id: "7",
          name: "JQuery",
          percentage: "80",
          width: 'width:80%'
        },
        {
          id: "8",
          name: "GIT",
          percentage: "90",
          width: 'width:90%'
        },
        {
          id: "9",
          name: "Javascript",
          percentage: "85",
          width: 'width:85%'
        },
        {
          id: "10",
          name: "Vue Js",
          percentage: "70",
          width: 'width:70%'
        },
      ],
    };
  },
}
</script>

<style>

</style>