<template>
  <div class="contact-container">
    <h3>Your message</h3>
    <form @submit.prevent="sendMessageToCoach">
      <div class="input-container">
        <label for="">Email</label>
        <input type="email" v-model="emailMessage">
      </div>
      <div class="input-container">
        <label for="">Message</label>
        <textarea name="" v-model="messageMessage"></textarea>
      </div>
      <base-button>Submit</base-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton },
    props: ["id"],
    data(){
      return {
        emailMessage: '',
        messageMessage: ''
      }
    },
    methods: {
      ...mapActions('requests', ["contactCoach"]),
      sendMessageToCoach(){
        this.contactCoach({
          'email': this.emailMessage,
          'message': this.messageMessage
        });
      }
    }
}
</script>

<style scoped>

.contact-container{
    border: 1px solid rgba(198, 197, 197, 0.456);
    width: 60%;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
}

form{
  display: flex;
  flex-direction: column;
}

.input-container {
  display: flex;
}

label{
  width: 30%;
}

button{
  width: 30%;
  align-self: center;
  margin-top: 20px;
}

</style>