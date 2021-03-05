<template>
  <div id="projects">
    <div class="container mt-4">
      <div class="row">
            <div
            class="col-md-6 col-lg-4 pb-3"
            v-for="project in projects"
            v-bind:key="project.projectNo"
            >
            <single-project :data="project" />
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "./single-project.vue";

export default {
  name: "ProjectJson",
  components: { SingleProject },
  data() {
    return {
      projects: [
        {
          projectNo: "project1",
          Demolink: "https://manageyourecommerce.com/",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/3.png",
          Pname: "Manage Your Ecommerce",
          Pdescription:
            "A web application where you can manage the inventory of your marketplaces (e.g. Amazon, Ebay, Woo-commerce etc) in one place.",
          Readlink: "/",
        },
        {
          projectNo: "project2",
          Demolink: "https://inventorykeeper.net/",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Inventory Keeper",
          Pdescription:
            " A web application where you can manage all your inventory like send shipment, dispatch box, search by different attribute and role by actions.",
          Readlink: "/",
        },
        {
          projectNo: "project3",
          Demolink: "https://attendancekeeper.net/",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/2.png",
          Pname: "Attendance Keeper",
          Pdescription:
            "This is an application where you can manage your staffs as well as employees in one platform.There are two different portal for an employee and admin respectively. Besides this, a super admin can manage everything.",
          Readlink: "/",
        },
        {
          projectNo: "project4",
          Demolink: "https://evidentbd.com/",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Evident BD",
          Pdescription: "A web application for Evident BD Ltd",
          Readlink: "/",
        },
      ],
    };
  },
};
</script>

<style>
#project1 {
  background: #21d4fd linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
}

#project2 {
  background: #fad961 linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
}

#project3 {
  background-image: radial-gradient(
    circle farthest-corner at 8.6% 21.8%,
    rgba(231, 0, 0, 1) 0%,
    rgba(122, 0, 0, 1) 90.1%
  );
}

#project4 {
  background: #0d9cbd linear-gradient(19deg, #065466 0%, #9c09e0 100%);
}

#project5 {
  background: #12d654 linear-gradient(19deg, #035163 0%, #958d99 100%);
}

#projectCards {
  margin-bottom: 100px !important;
}
</style>