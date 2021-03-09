<template>
  <div class="sec2contactform">
            <h3 class="text-dark">Want to Know More?? Drop me a Mail</h3>
            <form @submit.prevent="sendEmail">
              <div class="clearfix">
                <input
                  class="col2 first"
                  v-model="name"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  class="col2 last"
                  v-model="address"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div class="clearfix">
                <input
                  class="col2 first"
                  v-model="email"
                  type="Email"
                  placeholder="Email"
                />
                <input
                  class="col2 last"
                  type="text"
                  v-model="phone"
                  placeholder="Contact Number"
                />
              </div>
              <div class="clearfix">
                <textarea name="textarea" v-model="message" cols="30" rows="7">
Your message here...</textarea
                >
              </div>
              <div class="clearfix"><input type="submit" value="Send" /></div>
            </form>
          </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact-Form",
  data() {
    return {
      name: "",
      address: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_zgapu0w",
          "template_64yetzs",
          e.target,
          "user_59CZDqvxkwhM4iH8qaK7y",
          {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.addres = "";
      this.phone = "";
      this.email = "";
      this.message = "";
      this.$toaster.success("Email has been sent successfully!");
    },
  },
  //   mounted() {
  //     this.$toaster.success("Email has been sent successfully!");
  //   },
};
</script>

<style>

</style>