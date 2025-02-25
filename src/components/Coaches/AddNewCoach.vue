<template>
  <h1>Add new coach</h1>
  <div class="form-container">
    <form @submit.prevent="submitNewCoachForm">
      <div>
        <label for="">Firstname</label>
        <input type="text" v-model="firstName" />
      </div>
      <div>
        <label for="">Lastname</label>
        <input type="text" v-model="lastName" />
      </div>
      <div>
        <label for="">Areas</label>
        <div class="area-div">
          <input type="checkbox" value="frontend" v-model="areas" /> Frontend
          <input type="checkbox" value="backend" v-model="areas" /> Backend
          <input type="checkbox" value="career" v-model="areas" /> Career
        </div>
      </div>
      <div>
        <label for="">Description</label>
        <textarea
          name="description"
          id="description"
          v-model="description"
        ></textarea>
      </div>
      <div>
        <label for="">Rate per hour</label>
        <input type="number" v-model="hourlyRate" />
      </div>
      <base-button>Submit</base-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from '../UI/BaseButton.vue'

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      areas: [],
      description: "",
      hourlyRate: 0,
    };
  },
  methods: {
    ...mapActions(["addCoach"]),
    submitNewCoachForm() {
      this.addCoach({
        firstName: this.firstName,
        lastName: this.lastName,
        areas: this.areas,
        description: this.description,
        hourlyRate: this.hourlyRate,
      });
    },
  },
  components: {
    BaseButton
  }
};
</script>

<style scoped>
  h1{
    margin-left: 2rem;
  }

  .form-container{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
  }

  form{
    border: 1px solid rgba(198, 197, 197, 0.456);
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
    border-radius: 10px;
    margin: 2rem;
    padding: 2rem;
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  div{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  input, textarea{
    width: 80%;
  }

  .area-div{
    display: flex;
    flex-direction: row;
    width: 25%;
  }

  button{
    margin-top: 3rem;
    width: 30%;
    align-self: center;
  }
</style>
