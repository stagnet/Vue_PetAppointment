<template>
  <section class="hello">
    <app-appointment @add="addItem" />

    <vc-layout :spacing="20" class="m-auto">
      <vc-col :span="8" sm12 md12 xs24>
        <vc-card class="elevation-4">
          <vc-card-media height="316px" parallax background="/pet_image.png" />

          <vc-card-title>
            <h2
              :class="[
                'title',
                'ma-0',
                'pa-0',
                'ellipsis',
                'font-indigo',
                'align-center',
              ]"
            >
              Pet Appointments List
            </h2>
          </vc-card-title>

          <vc-card-text>
            <vc-collapsible
              color="indigo"
              :multiple="false"
              name="Pet Appointments"
            >
              <vc-collapsible-item
                has-vc-list
                max-height="186px"
                label="Details"
                icon="pets"
              >
                <!-- list start-->
                <vc-list>
                  <vc-list-item
                    v-for="appointment in appointments"
                    :key="appointment.aptIndex"
                  >
                    <!-- add & delete button -->

                    <vc-button
                      icon-button
                      size="small"
                      color="red"
                      @click="$emit('delete', appointment)"
                    >
                      <vc-icon>delete</vc-icon>
                    </vc-button>

                    <!-- name -->
                    <vc-list-item-primary-text
                      contenteditable="contenteditble"
                      @blur="
                        $emit(
                          'edit',
                          appointment.aptId,
                          'petName',
                          $event.target.innertext
                        )
                      "
                    >
                      <strong>Name: </strong> {{ appointment.petName }}
                    </vc-list-item-primary-text>

                    <!-- Owner name -->
                    <vc-list-item-secondary-text
                      contenteditable="contenteditble"
                      @blur="
                        $emit(
                          'edit',
                          appointment.aptId,
                          'petOwner',
                          $event.target.innertext
                        )
                      "
                    >
                      Owner: {{ appointment.petOwner }}
                    </vc-list-item-secondary-text>

                    <!-- date -->
                    <vc-list-item-primary-text>
                      {{ formattedDate(appointment.aptDate) }}
                    </vc-list-item-primary-text>

                    <!-- Notes -->
                    <vc-list-item-secondary-text
                      contenteditable="contenteditble"
                      @blur="
                        $emit(
                          'edit',
                          appointment.aptId,
                          'aptNotes',
                          $event.target.innertext
                        )
                      "
                    >
                      <strong>Note:</strong> {{ appointment.aptNotes }}
                    </vc-list-item-secondary-text>
                    <div :class="['align-center']">
                      <vc-rating
                        :class="['my-8']"
                        v-model="rating"
                        size="normal"
                      />
                    </div>
                  </vc-list-item>
                </vc-list>
                <!-- list end -->
              </vc-collapsible-item>
              <!-- <vc-collapsible-item has-vc-list label="Rating" icon="mdi-star">
              </vc-collapsible-item> -->
            </vc-collapsible>
          </vc-card-text>
          <vc-card-actions>
            <vc-button
              block
              color="indigo"
              tag="a"
              target="_blank"
              icon-left="camera"
            >
              Photos
            </vc-button>
          </vc-card-actions>
        </vc-card>
      </vc-col>
    </vc-layout>
  </section>
</template>

<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import AppAppointment from "./AddAppointment.vue";

  import moment from "moment";
  export default {
    name: "HelloWorld",
    props: {
      msg: {
        type: String,
      },
      spacing: {
        type: Number,
        default: null,
      },
    },
    props: ["appointments"],
    data() {
      return {
        rating: 2,
      };
    },
    components: {
      FontAwesomeIcon,
      AppAppointment,
    },

    methods: {
      formattedDate(date) {
        return moment(new Date(date)).format("DD-MM-YY, h:mm a");
      },
      addItem(appointment) {
        appointment.aptId = this.aptIndex;
        this.aptIndex++;
        this.appointments.push(appointment);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
