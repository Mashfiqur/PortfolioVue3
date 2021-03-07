<template>
        
          <div class="card-flipper effect__hover" data-id="1">
            <div class="card__front">
              <div class="card card-01">
                <div class="profile-box-01">
                  <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Card image cap">
                </div>
                <div class="card-body text-center" style="background:rgba(10,10,10,0.5);">
                  <span class="badge-box"><i class="fa fa-check"></i></span>
                  <h4 class="card-title">{{ data.company }}</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-default text-uppercase">Explore</a>
                </div>
              </div>
            </div>

            <div class="card__back">
              <div class="card card-01">
                <div class="card-body text-center">
                  <h4 class="card-title">Mike Parker</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <span class="social-box">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-behance"></i></a>
            </span>
                </div>
              </div>
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
.card {
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  border: 10px solid #fcf5d3;
  margin-bottom: 30px;
}
.card-01 .card-body {
  position: relative;
  padding-top: 40px;
}
.card-01 .badge-box {
  position: absolute;
  top: -20px;
  left: 50%;
  width: 100px;
  height: 100px;
  margin-left: -50px;
  text-align: center;
}
.card-01 .badge-box i {
  background: #DFC717;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
.profile-box {
  background-size: cover;
  float: left;
  width: 100%;
  text-align: center;
  padding: 30px 0;
  position: relative;
  overflow: hidden;
}
.profile-box:before {
  background-color: #777777;
  background-image: url("https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb");
  width: 100%;
  position: absolute;
  content: "";
  left: -10%;
  top: 0;
  z-index: 0;
}
.profile-box img {
  width: 170px;
  height: 170px;
  position: relative;
  border: 5px solid #fff;
}
.social-box i {
  border: 1px solid #DFC717;
  color: #DFC717;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
}
.social-box i:hover {
  background: #DFC717;
  color: #fff;
}
.social-box a {
  margin: 0 5px;
}

.card-01 .height-fix .card-img-overlay {
  top: inherit;
  color: #fff;
  background: -moz-linear-gradient(top,  #1e5799 0%, #7db9e8 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(100%,#7db9e8)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); /* IE10+ */
}
.card-01 .height-fix .fa {
  color: #fff;
  font-size: 22px;
  margin-right: 18px;
}
.card-01 .height-fix .card-img-top {
  width: auto;
  height: 100%;
}

/*flipper-card*/
.card-flipper {
  position: relative;
  float: left;
  width: 100%;
  text-align: center;
  height: 450px;
}

.card__front, .card__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__back .card {
  width: 100%;
  height: 450px;
}

.card__front, .card__back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.card__front {
  background-color: #ff5078;
}

.card__back {
  background-color: #1e1e1e;
  -webkit-transform: rotateY(-180deg);
   -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.card-flipper.effect__hover:hover .card__front {
  -webkit-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.card-flipper.effect__hover:hover .card__back {
  -webkit-transform: rotateY(0);
  -ms-transform: rotateY(0);
  transform: rotateY(0);
}

.card-flipper.effect__random.flipped .card__front {
  -webkit-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.card-flipper.effect__random.flipped .card__back {
  -webkit-transform: rotateY(0);
  -ms-transform: rotateY(0);
  transform: rotateY(0);
}
</style>