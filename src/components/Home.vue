<template>
  <div class="light_back">
    <div class="intro-header">
      <div class="container py-5 text-light">
        <div class="row py-5 mt-5">
          <div class="col-lg-12">
            <div class=" card glass ">
              <h1> <span style='font-size:40px;'>&#9995;</span> Hi there!</h1>
              <h4>
                My name is Md. Mashfiqur Rahman.
              </h4>
              <p style="color:wheat;">I am a Web Application Designer from
                Bangladesh.</p>
              <h5 style="font-family: Gill Sans Extrabold, sans-serif;">
                I have over 1.2 years experience of digital design expertise. I
                had the opportunity to produce some digital projects for
                clients such as Inventory Management, Ecommerce, Attendance Keeper,
                Library Management and other exiciting projects. But enough about me, how
                have you been?
              </h5>
              
                    <!-- <button type="button"  data-toggle="modal" data-target="#register">Register Now</button> -->
                    
                      <div class="col-md-12 col-sm-12 py-2 pb-3 text-center">
                    
<router-link class="btn btn-primary btn-sm" to="/contact">
          <span
            >Send Me A Message</span>
        </router-link>
                     
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
   methods:
    {
        gotoLink: function (link, target = '_blank') {
            window.open(link, target);
        }
     }
};
</script>

<style>
.light_back{
   background: inherit;
   background-color: rgba(0, 0, 0, 0);
}
.glass{
   background-color: rgba(20, 20, 20, 0.5);

}
</style>