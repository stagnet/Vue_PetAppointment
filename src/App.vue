<template>
  <div id="main-app">
    <vc-layout>
      <vc-toolbar color="pink" fixed dark application>
        <vc-toolbar-icon-left icon="mdi-lastfm" />
        <vc-toolbar-title>Pet&#9829;Care</vc-toolbar-title>
      </vc-toolbar>

      <!-- Search bar starts -->
      <search-apt @searchRecords="searchAppointments" />
      <!-- Search bar ends -->

      <HelloWorld
        msg="Welcome to Your Vue.js Appoinment App"
        :appointments="searchApts"
        @delete="removeItem"
        @edit="editItem"
      />
    </vc-layout>
    <vc-footer color="deep-purple " align="center" :class="title">
      Made with &#9829;
    </vc-footer>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";
  import SearchApt from "./components/SearchApt.vue";
  import _ from "lodash";
  import axios from "axios";
  export default {
    name: "MainApp", //we can call here using camel case which is perfectlly fine..
    components: {
      HelloWorld,
      SearchApt,
    },
    data() {
      return {
        title: "Appointments List",
        appointments: [],
        searchTerms: "",
        //create an index for each element in an array;
        aptIndex: 0,
      };
    },

    mounted() {
      axios.get("/data/appointment.json").then((response) => {
        this.appointments = response.data.map((appointment) => {
          appointment.aptId = this.aptIndex;
          this.aptIndex++;
          return appointment;
        });
      });
    },
    computed: {
      searchApts() {
        return this.appointments.filter((appointment) => {
          return (
            appointment.petName
              .toLowerCase()
              .match(this.searchTerms.toLowerCase()) ||
            appointment.petOwner
              .toLowerCase()
              .match(this.searchTerms.toLowerCase()) ||
            appointment.aptNotes
              .toLowerCase()
              .match(this.searchTerms.toLowerCase())
          );
        });
      },
    },
    methods: {
      searchAppointments(terms) {
        this.searchTerms = terms;
      },
      removeItem(appointment) {
        this.appointments = _.without(this.appointments, appointment);
      },
      editItem(id, field, text) {
        const aptIndex = _.findIndex(this.appointments, { aptId: id });
        const New_appointments = (this.appointments[aptIndex][field] = text);
        // console.log(typeof New_appointments);
      },
    },
  };
</script>

<style>
  #main-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
