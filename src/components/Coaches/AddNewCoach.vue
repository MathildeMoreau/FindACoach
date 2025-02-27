<template>
  <h1>Add new coach</h1>
  <div class="form-container">
    <form @submit.prevent="submitNewCoachForm">
      <div :class="{invalid: !firstName.isValid}">
        <label for="">Firstname</label>
        <input type="text" v-model.trim="firstName.value" @blur="clearValidity(firstName)"/>
      </div>
      <div :class="{invalid: !lastName.isValid}">
        <label for="">Lastname</label>
        <input type="text" v-model.trim="lastName.value" @blur="clearValidity(lastName)" />
      </div>
      <div :class="{invalid: !areas.isValid}">
        <label for="">Areas</label>
        <div class="area-div" :class="{invalid: !areas.isValid}">
          <input type="checkbox" value="frontend" v-model="areas.value" @blur="clearValidity(areas)"/>
          <label for="frontend">Frontend</label> 
          <input type="checkbox" value="backend" v-model="areas.value" @blur="clearValidity(areas)" />
          <label for="backend">Backend</label> 
          <input type="checkbox" value="career" v-model="areas.value" @blur="clearValidity(areas)" />
          <label for="career">Career</label>
        </div>
      </div>
      <div :class="{invalid: !description.isValid}">
        <label for="">Description</label>
        <textarea
          name="description"
          id="description"
          v-model="description.value"
          @blur="clearValidity(description)"
        ></textarea>
      </div>
      <div :class="{invalid: !hourlyRate.isValid}">
        <label for="">Rate per hour</label>
        <input type="number" v-model="hourlyRate.value" @blur="clearValidity(hourlyRate)" />
      </div>
      <p v-if="!formIsValid">Please fix the above errors and submit again</p>
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
      firstName: {
        value: '',
        isValid: true
      },
      lastName: {
        value: '',
        isValid: true
      },
      areas: {
        value: [],
        isValid: true
      },
      description: {
        value: '',
        isValid: true
      },
      hourlyRate: {
        value: 0,
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    ...mapActions('coaches', ["addCoach"]),
    submitNewCoachForm() {
      this.validateForm();
      if (!this.formIsValid){
        return;
      }
      this.addCoach({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        areas: this.areas,
        description: this.description.value,
        hourlyRate: this.hourlyRate.value,
      });
      this.$router.replace('/coaches');
    },
    validateForm(){
      this.formIsValid = true;

      if (this.firstName.value === ''){
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === ''){
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === ''){
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.hourlyRate.value || this.hourlyRate.value < 0){
        this.hourlyRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length == 0 ){
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidity(input){
      console.log(input);
      input.isValid = true;
    }
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

  .invalid label{
    color: red;
  }

  .invalid input, .invalid textarea{
    border: 1px solid red;
  }
</style>
