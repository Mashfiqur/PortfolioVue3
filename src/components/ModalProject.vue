<template>
  <div>
      <a
                  @click.prevent="show"
                  target="_blank"
                  class="ml-2 btn btn-outline-primary"
                  >Read More</a
                >
    <modal name="modal-project">
{{data.projectNo}}
    </modal>
  </div>
</template>

<script>
export default {

    methods:{
        show() {
            this.$modal.show('modal-project');
        },
        hide() {
            this.$modal.hide('modal-project');
        }
    }
}
</script>

<style>

</style>