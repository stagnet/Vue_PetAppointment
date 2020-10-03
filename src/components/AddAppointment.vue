<template>
  <div>
    <vc-layout :spacing="20" class="m-auto">
      <vc-col :span="8" sm12 xs24 class="headline">
        <vc-card elevation="3">
          <vc-toolbar color="blue" narrow application>
            <div @click="hidepanel = !hidepanel">
              <vc-toolbar-icon-left icon="add" />
            </div>

            <vc-toolbar-title>
              Pet&#9829;Care Add Appointment
            </vc-toolbar-title>
          </vc-toolbar>
          <!-- form start -->

          <form v-if="hidepanel">
            <vc-text
              class="mx-16 align-right"
              type="text"
              label="Pet Name"
              icon-left="pets"
              name="text-0"
              color="primary"
              v-model="formData.petName"
            />
            <vc-text
              class="mx-16 align-right"
              type="text"
              label="Pet Owner"
              icon-left="pets"
              name="text-1"
              color="primary"
              v-model="formData.ownerName"
            />
            <vc-text
              class="mx-16 align-right"
              type="date"
              label="Date"
              icon-left="pets"
              name="text-2"
              color="primary"
              v-model="formData.date"
            />
            <vc-text
              class="mx-16 align-right"
              type="textarea"
              label="Appointment Note"
              icon-left="email"
              name="textarea-1"
              color="primary"
              v-model="formData.notes"
            />
            <div class="ma-8">
              <vc-button icon-left="check_circle" color="info">
                Add
              </vc-button>
            </div>
          </form>
        </vc-card>
      </vc-col>
    </vc-layout>
  </div>
</template>

<script>
  export default {
    name: "AddAppointment",
    props: ["spacing"],
    data() {
      return {
        formData: [],
        hidepanel: false,
      };
    },
  };
</script>

<style scoped>
  .form {
    display: block;
    width: 100%;
  }
</style>
