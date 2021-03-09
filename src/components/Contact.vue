<template>
  <div class="container">
    <div class="innerwrap">
      <!-- <section class="section1 clearfix">
				<div class="textcenter">
					<h3>Drop Us a Mail</h3>
				</div>
			</section> -->

      <section class="section2 clearfix flex">
        <div class="col2 column1 first mt-5">
          <p class="text-dark pb-4 ">
            29/1, 2, 3 Justice Lalmohon Daslane, Sutrapur, Dhaka-1100
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.0386950472878!2d90.41964807106795!3d23.707610690198756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cb3f456ad1%3A0xc9dd249bf70228d8!2sAjimon%20Tower!5e0!3m2!1sen!2sbd!4v1615006607770!5m2!1sen!2sbd"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="col2 column2 last">
          <div class="sec2innercont">
            <div class="sec2addr" style=" background:rgba(10,10,10,0.5) ; color: wheat !important;">
              <p><span class="collig">Phone :</span> +8801521455637</p>
              <p><span class="collig">Email :</span> mashfiqurrr@gmail.com</p>
              <p>
                <span class="collig">Github :</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer" style="color: white !important; text-decoration:none;"
                  href="https://github.com/Mashfiqur"
                  >https://github.com/Mashfiqur</a
                >
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from "./contact-form.vue";

export default {
  name: "Contact",
  components: { ContactForm },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* 
body {
	background: #ffffff;
	color: #333;
	font-weight: normal;
	font-size: 1em;
	font-family: 'Roboto', Arial, sans-serif;
} */

input:focus,
textarea:focus,
keygen:focus,
select:focus {
  outline: none;
}
::-moz-placeholder {
  color: #666;
  font-weight: 300;
  opacity: 1;
}

::-webkit-input-placeholder {
  color: #666;
  font-weight: 300;
}

/* Contact Form Styling */

.textcenter {
  text-align: center;
}
.section1 {
  text-align: center;
  display: table;
  width: 100%;
}
.section1 .shtext {
  display: block;
  margin-top: 20px;
}
.section1 .seperator {
  border-bottom: 1px solid #a2a2a2;
  width: 35px;
  display: inline-block;
  margin: 20px;
}

.section1 h1 {
  font-size: 40px;
  color: #a44dd8;
  font-weight: normal;
}

.section2 {
  width: 1200px;
  margin: 25px auto;
}
.section2 .col2 {
  width: 48.71%;
}
.section2 .col2.first {
  float: left;
}
.section2 .col2.last {
  float: right;
}
.section2 .col2.column2 {
  padding: 0 30px;
}
.section2 span.collig {
  color: #a2a2a2;
  margin-right: 10px;
  display: inline-block;
}
.section2 .sec2addr {
  display: block;
  line-height: 26px;
}
.section2 .sec2addr p:first-child {
  margin-bottom: 10px;
}
.section2 .sec2contactform input[type="text"],
.section2 .sec2contactform input[type="email"],
.section2 .sec2contactform textarea {
  padding: 18px;
  border: 0;
  background: #ededed;
  margin: 7px 0;
}
.section2 .sec2contactform textarea {
  width: 100%;
  display: block;
  color: #666;
  resize: none;
}
.section2 .sec2contactform input[type="submit"] {
  padding: 15px 40px;
  color: #fff;
  border: 0;
  background: #a44dd8;
  font-size: 16px;
  text-transform: uppercase;
  margin: 7px 0;
  cursor: pointer;
}
.section2 .sec2contactform h3 {
  font-weight: normal;
  margin: 20px 0;
  margin-top: 30px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 19px;
  color: #a44dd8;
}

/* @media querries */

@media only screen and (max-width: 1266px) {
  .section2 {
    width: 100%;
  }
}
@media only screen and (max-width: 960px) {
  .container {
    padding: 0 30px 70px;
  }
  .section2 .col2 {
    width: 100%;
    display: block;
  }
  .section2 .col2.first {
    margin-bottom: 10px;
  }
  .section2 .col2.column2 {
    padding: 0;
  }
  body .sec2map {
    height: 250px !important;
  }
}
@media only screen and (max-width: 768px) {
  .section2 .sec2addr {
    font-size: 14px;
  }
  .section2 .sec2contactform h3 {
    font-size: 16px;
  }
  .section2 .sec2contactform input[type="text"],
  .section2 .sec2contactform input[type="email"],
  .section2 .sec2contactform textarea {
    padding: 10px;
    margin: 3px 0;
  }
  .section2 .sec2contactform input[type="submit"] {
    padding: 10px 30px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 420px) {
  .section1 h1 {
    font-size: 28px;
  }
}
</style>