<template>
  <div class="contact-container">
    <h3>Your message to {{ coach.firstName }} {{ coach.lastName }}</h3>
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
import { mapMutations } from 'vuex'
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton },
    props: ["id"],
    computed: {
    coach() {
      return this.$store.getters["coaches/getAllCoaches"].find((c) => c.id === this.id);
    },
    data(){
      return {
        emailMessage: '',
        messageMessage: ''
      }
    },
    methods: {
      ...mapMutations('requests', ['sendMessage']),
      sendMessageToCoach(){
        this.sendMessage({
          'email': this.emailMessage,
          'message': this.messageMessage
        });
        this.$router.push('/coaches');
      }
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