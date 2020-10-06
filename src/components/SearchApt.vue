<template>
  <div>
    <div class="col-12 col-md-12 col-lg-12">
      <div class="input-group my-3">
        <input
          id="SearchApts"
          placeholder="Search"
          type="text"
          class="form-control"
          aria-label="Search Appointments"
          v-model="searchTerm"
        />

        <div class="input-group-append dropup">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort by
            <span class="caret"></span>
          </button>

          <div class="dropdown-menu dropdown-menu-right">
            <a
              href="#"
              class="dropdown-item d-flex justify-content-between"
              id="petName"
              @click="$emit('request-key', 'petName')"
            >
              Pet Name
              <font-awesome-icon icon="check" v-if="myKey === 'petName'" />
            </a>

            <a
              class="dropdown-item d-flex justify-content-between"
              href="#"
              id="aptDate"
              @click="$emit('request-key', 'aptDate')"
            >
              Date
              <font-awesome-icon icon="check" v-if="myKey === 'aptDate'" />
            </a>

            <a
              href="#"
              class="dropdown-item d-flex justify-content-between"
              id="ownerName"
              @click="$emit('request-key', 'petOwner')"
            >
              Owner
              <font-awesome-icon icon="check" v-if="myKey === 'petOwner'" />
            </a>

            <div class="dropdown-divider" role="separator"></div>

            <a
              class="dropdown-item d-flex justify-content-between"
              href="#"
              id="asc"
              @click="$emit('request-order', 'asc')"
            >
              Asc
              <font-awesome-icon icon="check" v-if="myOrder === 'asc'" />
            </a>

            <a
              class="dropdown-item d-flex justify-content-between"
              href="#"
              id="desc"
              @click="$emit('request-order', 'desc')"
            >
              Desc
              <font-awesome-icon icon="check" v-if="myOrder === 'desc'" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  export default {
    name: "SearchApt",
    data() {
      return {
        searchTerm: "",
      };
    },
    components: {
      FontAwesomeIcon,
    },
    watch: {
      //this will watch and emit this function all the time behind the scene
      searchTerm() {
        this.$emit("searchRecords", this.searchTerm);
      },
    },
    props: ["myKey", "myOrder"],
  };
</script>

<style scoped></style>
