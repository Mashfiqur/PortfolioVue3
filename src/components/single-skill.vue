<template>
  <div class="row container py-2">
    <div class="col-2 text-center" >
      <h3>{{ skill.name }}</h3>
    </div>
    <div class="col-10 pt-2 text-center">
      <div
        class="progress-bar bg-info text-dark progress-bar-striped active"
        role="progressbar"
        :aria-valuenow="skill.percentage"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="skill.width"
      >
        {{ skill.percentage }}%
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['skill'],
  data() {
        return {};
            
    }
    
};
</script>

<style>
</style>