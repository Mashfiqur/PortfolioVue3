<template>
  <div class="container text-center">
   <div class="row text-white">
   <ul class="home-list mx-auto mt-5">
           <li><b>Father's Name:</b> Late Gias Uddin</li>   
           <li><b>Mother's Name:</b> Rasheda Begum</li>  
           <li><b>Date of Birth:</b> 19th September, 1995</li>   
           <li><b>Marital Status:</b> Single</li>  
           <li><b>Religion:</b> Islam</li>   
           <li><b>Blood Group:</b> B+(ve)</li>  
           <li><b>Extra Curriculum Activities: </b>
<span > Soccer, Cricket, Music, Solving Math, Writing, Nature Photography</span>

           </li> 
    </ul>
    </div>

    <div class="row">
    <Slider />
    </div>

  </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
  name: "Personal",
  components: { Slider },
};
</script>

<style>
.home-list {
  list-style: none;
  width: 80%;
  background: rgba(82, 2, 2, 0.7);
  padding: 30px;
  border-radius: 4px;
  
}
.home-list li {
  padding: 10px 0 10px 0;
}
.home-list li:nth-child(3n-2) {
  text-align: left;

}
.home-list li:nth-child(3n - 1) {
  text-align: center;

}
.home-list li:nth-child(3n) {
  text-align: right;

}
.home-list li:nth-child(odd) {
  
  border-left: 10px solid #1488F3;
  padding-left: 4px;
  border-bottom: 10px solid #86bfff;
}
.home-list li:nth-child(even) {
  
  border-right: 10px solid #1488F3;
  padding-right: 4px;
  border-bottom: 10px solid #86bfff;
}



</style>