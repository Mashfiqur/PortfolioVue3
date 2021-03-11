<template>
  <div class="containercard">
    <div class="overlaycard">
      <div class="items"></div>
      <div class="items head">
        <p>Flower Embroidery Hoop Art</p>
        <hr />
      </div>
      <div class="items price">
        <p class="old">$699</p>
        <p class="new">$345</p>
      </div>
      <div class="items cart">
        <i class="fa fa-shopping-cart"></i>
        <span>ADD TO CART</span>
      </div>
    </div>

    <div class="Box">
      <div class="FlipBox">
        <div class="Front">
          <img
            src="https://4.bp.blogspot.com/-KRgPw0-oqlo/XxDDvfy0NMI/AAAAAAAAAHs/5_f5YlQYD4s-TAbNoHUgk0_-PN6po8FQgCPcBGAYYCw/s1600/image04.jpg"
          />
        </div>
        <div class="Back">
          <div>
            <h3>This Is Title Article</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "beauticard",
};
</script>

<style>
.Box {
  position: relative;
  width: 250px;
  min-height: 350px;
  transform-style: preserve-3d;
  perspective: 800px;
  transition: 1s;
  margin: 5px;
}
.Box .FlipBox {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-style: preserve-3d;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
}
.Box .Front,
.Box .Back {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.5s;
  backface-visibility: hidden;
}
.Box .Front img {
  width: 100%;
  height: 100%;
}
.Box .Back {
  background-color: #081a25;
  color: #fff;
  display: table;
  transform: rotateY(180deg);
}
.Box .Back div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 20px;
}
.Box .Back div h3 {
  font-size: 22px;
}
.Box .Back div p {
  font-size: 17px;
  margin-top: 10px;
}
.Box .Back div a {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  width: 120px;
  height: 45px;
  background-color: #fff;
  color: #222;
  line-height: 45px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  font-weight: bold;
}
.Box .Back div a:hover {
  background-color: #081a25;
  color: #fff;
}
.Box:hover .FlipBox {
  transform: rotateY(180deg);
}
.Box:hover {
  transform: translateY(-30px);
  z-index: 2;
}
@media (max-width: 780px) {
  .Box:not(:last-child):hover {
    transform: translateY(0px);
    z-index: 2;
  }
}
@media (max-width: 520px) {
  .Box:hover {
    transform: translateY(0px);
    z-index: 2;
  }
}
@media (max-width: 255px) {
  .Box {
    width: 100%;
  }
}



.containercard {
  width: 300px;
  height: 400px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background: url("https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg");
  background-color: black;
  background-size: cover;
  cursor: pointer;
  -webkit-box-shadow: 0 0 5px #000;
  box-shadow: 0 0 5px #000;
}

.overlaycard {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  background: rgba(77, 77, 77, 0.9);
  color: #fef5df;
  opacity: 0;
  transition: all 0.5s;
  font-family: "Playfair Display", serif;
}

.items {
  padding-left: 20px;
  letter-spacing: 3px;
}

.head {
  font-size: 30px;
  line-height: 40px;
  transform: translateY(40px);
  transition: all 0.7s;
}
.head hr {
  display: block;
  width: 0;
  border: none;
  border-bottom: solid 2px #fef5df;
  position: absolute;
  bottom: 0;
  left: 20px;
  transition: all 0.5s;
}

.price {
  font-size: 22px;
  line-height: 10px;
  font-weight: bold;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s;
}
.price .old {
  text-decoration: line-through;
  color: #b3b3b3;
}

.cart {
  font-size: 12px;
  opacity: 0;
  letter-spacing: 1px;
  font-family: "Lato", sans-serif;
  transform: translateY(40px);
  transition: all 0.7s;
}
.cart i {
  font-size: 16px;
}
.cart span {
  margin-left: 10px;
}

.containercard:hover .overlaycard {
  opacity: 1;
}
.containercard:hover .overlaycard .head {
  transform: translateY(0px);
}
.containercard:hover .overlaycard hr {
  width: 75px;
  transition-delay: 0.4s;
}
.containercard:hover .overlaycard .price {
  transform: translateY(0px);
  transition-delay: 0.3s;
  opacity: 1;
}
.containercard:hover .overlaycard .cart {
  transform: translateY(0px);
  transition-delay: 0.6s;
  opacity: 1;
}
</style>