<template>
  <div class="card-content">
    <base-card :coach="coach"></base-card>
    <div class="button-container">
        <router-link :to="{name:'coach-profile', params: {id : coach.id}}"><base-button>About me</base-button></router-link>
       <router-link to="/contact"> <base-button>Contact me</base-button></router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseCard, BaseButton },
  props: ["coach"],
  methods: {
    ...mapMutations('coaches', ['setCurrentCoach']),
    redirectToMessages() {
      this.setCurrentCoach(this.coach.id);
      this.$router.push("/contact");
    },
    redirectToProfile() {
      this.setCurrentCoach(this.coach.id);
      this.$router.push("/coaches/" + this.coach.id);
    },
  },
};
</script>

<style scoped>
.card-content {
  margin: 20px;
  padding: 10px;
  border: 1px solid rgba(198, 197, 197, 0.456);
  width: 80%;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  justify-content: space-around;
}
button {
  width: 100%;
  padding: 10px 30px;
}

</style>
