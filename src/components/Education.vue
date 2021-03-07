<template>
  <div class="container p-t-2">
    <div class="row display-flex mt-5" id="about">
      <div class="col-sm-4">
        <img
          class="m-b-1 img-fluid img-rounded hidden-xs-down"
          src="/images/NSU.jpg"
          alt="PortLand"
        />
        <div class="glass">
          <h4>North South University</h4>
          <h5>Bashundhara Residential Area, Dhaka 1229</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <img
          class="m-b-1 img-fluid img-rounded hidden-xs-down"
          src="/images/Buet.jpg"
          alt="PortLand"
        />
        <div class="glass">
          <h4>Engineering University School & College</h4>
          <h5>82 Municipal Office Street, Dhaka 1100</h5>
        </div>
      </div>
      <div class="col-sm-4">
        <img
          class="m-b-1 img-fluid img-rounded hidden-xs-down"
          src="/images/Gregory.jpg"
          alt="PortLand"
        />
        <div class="glass">
          <h4>St. Gregory's High School</h4>
          <h5>82 Municipal Office Street, Dhaka 1100</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style>
#formal-education {
  background: #ecf6fb;
}
.glass {
  background-color: rgba(20, 20, 20, 0.5);
  color: rgb(243, 241, 239);
}
</style>