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
          Github: null,
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/3.png",
          Pname: "Manage Your Ecommerce",
          Pdescription:
            "A web application where you can manage the inventory of your marketplaces (e.g. Amazon, Ebay, Woo-commerce etc) in one place.",
          Description: "",

        },
        {
          projectNo: "project2",
          Demolink: "https://inventorykeeper.net/",
          Github: null,
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Inventory Keeper",
          Pdescription:
            " A web application where you can manage all your inventory like send shipment, dispatch box, search by different attribute and role by actions.",
          Description: "",
        },
        {
          projectNo: "project3",
          Demolink: "https://attendancekeeper.net/",
          Github: null,
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/2.png",
          Pname: "Attendance Keeper",
          Pdescription:
            "This is an application where you can manage your staffs as well as employees in one platform.There are two different portal for an employee and admin respectively. Besides this, a super admin can manage everything.",
          Description: "",
        },
        {
          projectNo: "project4",
          Demolink: "https://evidentbd.com/",
          Github: null,
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Evident BD",
          Pdescription: "A web application for Evident BD Ltd",
          Description: "",
        },
         {
          projectNo: "project5",
          Demolink: null,
          Github: "https://github.com/Mashfiqur/Inventory_Supplier_Company",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Supplier Distributor Management",
          Pdescription: "A web application where distributors can order for products to the registered suppliers. On the other hand, Suppliers can see which products they have to supply for a particular company!",
          Description: "",
        },
         {
          projectNo: "project6",
          Demolink: null,
          Github: "https://github.com/Mashfiqur/Video-Chat-WebRTC-Pusher-Laravel",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Video Chat Application",
          Pdescription: "A web application for video chatting where users can chat with his/her friends. It is developed through WebRTC(Web Real Time Communication) and Pusher.",
          Description: "",
        },
         {
          projectNo: "project7",
          Demolink: null,
          Github: "https://github.com/Mashfiqur/law_library",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Law Library",
          Pdescription: "The website of cases is mainly for law students and for lawyers where different types of cases will be stored in an organized way and students will be able to search this data using keyword.",
          Description: "",
        },
        {
          projectNo: "project8",
          Demolink: null,
          Github: "https://github.com/Mashfiqur/PortfolioVue3",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Personal Portfolio",
          Pdescription: "A personal portfolio of mine which is developed on Vue Js 3.",
          Description: "",
        },
         {
          projectNo: "project9",
          Demolink: null,
          Github: "https://github.com/Mashfiqur/Live-table-fetch-edit-delete-ajax-laravel",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Live-table-fetch-edit-delete",
          Pdescription: "A web application for fetching, updating, deleting data from database. It is developed through Ajax & Laravel.",
          Description: "",
        },
         {
          projectNo: "project10",
          Demolink: null,
          Github: "https://github.com/Mashfiqur/Laravel_8_Livewire_CRUD",
          Pavatar:
            "https://res.cloudinary.com/dcl67luxn/image/upload/v1543875011/4.png",
          Pname: "Livewire Crud",
          Pdescription: "A web application for fetching, updating, deleting data from database without page refreshing. It is developed through Laravel Livewire.",
          Description: "",
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
#project6 {
  background: #eef7f1 linear-gradient(19deg, #3a393d 0%, #958d99 100%);
}
#project7 {
  background: #f0f3f1 linear-gradient(19deg, #631e03 0%, #958d99 100%);
}
#project8 {
  background: #12d654 linear-gradient(19deg, #630310 0%, #9c04e9 100%);
}
#project9 {
  background: #cfddd4 linear-gradient(19deg, #0ef306 0%, #273fc5 100%);
}
#project10 {
  background: #03471a linear-gradient(19deg, #376069 0%, #810fb9 100%);
}
#project11 {
  background: #2e7a47 linear-gradient(19deg, #51b7ce 0%, #958d99 100%);
}

#projectCards {
  margin-bottom: 100px !important;
}
</style>