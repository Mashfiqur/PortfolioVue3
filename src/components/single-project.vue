<template>
            
            <div class="card card-custom bg-white border-white border-0">
              <!--Enter Project Logo/Favicon here-->
              <div class="card-custom-img" v-bind:id="data.projectNo"></div>
              <a v-bind:href="data.Demolink" target="_blank" class="grow">
                <div class="card-custom-avatar">
                  <img
                    class="img-fluid"
                   v-bind:src="data.Pavatar"
                    alt="Avatar"
                  />
                </div>
              </a>
              <div class="card-body" style="overflow-y: auto">
                <h4 class="card-title">{{ data.Pname }}</h4>
                <p class="card-text">{{ data.Pdescription }}</p>
              </div>
              <div
                class="card-footer"
                style="background: inherit; border-color: inherit"
              >
                <a
                  v-bind:href="data.Demolink"
                  target="_blank"
                  class="btn btn-info mx-2"
                  >
                  <span v-if="data.Github === null">
                    View Live
                  </span>
                  <span v-else-if="data.Github !== null">
                  <font-awesome-icon :icon="['fas', 'user-secret']" /> GitHub Link
                  </span>
                  </a
                >
                <a
                  v-bind:href="data.Readlink"
                  target="_blank"
                  class="ml-2 btn btn-outline-primary"
                  >Read More</a
                >
               
              </div>
            </div>
          
</template>

<script>
export default {
  props: ['data'],
  data() {
        return {};
            
        }
    
};
</script>

<style>
.card-custom {
  overflow: hidden;
  min-height: 450px;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
}

.card-custom-img {
  height: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-color: inherit;
}
.card-custom-img::after {
  position: absolute;
  content: "";
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 545px;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: inherit;
}

.card-custom-avatar img {
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
  position: absolute;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}

.card-custom-avatar img:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.img-fluid {
  background-color: #7ed956;
}
</style>