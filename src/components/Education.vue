<template>
  <div class="container p-t-2">
  <hr style="border: 1px solid red;">
    <div class="row d-flex mt-2 py-2" id="about">
      <div class="col-sm-4 d-flex">
        <img
          class="m-b-1 img-fluid img-rounded hidden-xs-down"
          src="images/NSU.JPG"
          alt="PortLand"
        />
        
      </div>
      <div class="col-sm-8 glassO">
          <h5 class="mt-2 text-info">North South University</h5>
          <p style="color:wheat;">Bashundhara Residential Area, Dhaka 1229</p>
          <hr>
          <div class="text-left">
          <p><b class="educolor">Degree: </b> Bachelor of Science in Computer Science & Engineering</p>
          <p><b class="educolor">Duration: </b> May 2015 - April 2020</p>
          <p><b class="educolor">Result: </b> CGPA 3.55 Out of 4.00</p>
          <p><b class="educolor">Distinction: </b> Cum Laude</p>
          

          </div>
        </div>
    </div>
  <hr style="border: 1px solid red;">
    <div class="row display-flex mt-2 py-2" id="about">
      <div class="col-sm-4 d-flex">
        <img
          class="m-b-1 img-fluid img-rounded hidden-xs-down"
          src="images/BUET.JPG"
          alt="PortLand"
        />
        
      </div>
      <div class="col-sm-8 glassO">
          <h5 class="mt-2 text-info">Engineering University School & College</h5>
          <p style="color:wheat;">BUET Campus, Dhaka 1000</p>
          <hr>
            <div class="text-left">
              <p><b class="educolor">Group: </b>Science <span class="ml-5 pl-2"><b class="educolor">Board:</b> Dhaka </span></p>
              <p><b class="educolor">Duration: </b> June 2011 - May 2013</p>
              <p><b class="educolor">Certificate: </b> Higher Secondary School Certificate</p>
              <p><b class="educolor">Result: </b> GPA 5.00 Out of 5.00 </p>

            </div>
        </div>
    </div>
  <hr style="border: 1px solid red;">
    <div class="row display-flex mt-2 py-2" id="about">
      <div class="col-sm-4 d-flex">
        <img
          class="m-b-1 img-fluid img-rounded hidden-xs-down"
          src="images/GREGORY.JPG"
          alt="PortLand"
        />
        
      </div>
      <div class="col-sm-8 glassO">
          <h5 class="mt-2 text-info">St. Gregory's High School</h5>
          <p style="color:wheat;">82 Municipal Office Street, Dhaka 1100</p>
          <hr>
          <div class="text-left">
              <p><b class="educolor">Group: </b>Science <span class="ml-5 pl-2"><b class="educolor">Board:</b> Dhaka </span></p>
              <p><b class="educolor">Duration: </b> January 2001 - March 2011</p>
              <p><b class="educolor">Certificate: </b> Secondary School Certificate</p>
              <p><b class="educolor">Result: </b> GPA 5.00 Out of 5.00 </p>

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
.glassO {
  background-color: rgba(61, 3, 3, 0.8);
  color: rgb(243, 241, 239);
}
.educolor{
  color: rgb(17, 140, 240);
}
</style>