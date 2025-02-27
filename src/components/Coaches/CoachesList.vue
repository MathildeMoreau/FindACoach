<template>
  <div class="coach-list-header">
    <h1>Coaches list</h1>
    <base-button @click="redirectToNewCoach">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
      <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM24,13v11h-11v2h11v11h2v-11h11v-2h-11v-11z"></path></g></g>
    </svg>
    Register a new coach !
  </base-button>
</div>
<div class="select-field">
  <input type="checkbox" :value="frontend" v-model="workFields" >Frontend
  <input type="checkbox" :value="backend" v-model="workFields" >Backend
  <input type="checkbox" :value="career" v-model="workFields" >Career
</div>

  <div v-for="coach in getAllCoaches" :key="coach.id">
    <coach-card :coach="coach"></coach-card>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import { mapActions, mapGetters } from "vuex";
import CoachCard from './CoachCard.vue';

export default {
  components: { BaseButton, CoachCard },
  data(){
    return {
      workFields: []
    }
  },
  computed: {
    ...mapGetters('coaches', ["getAllCoaches"]),
  },
  methods: {
    ...mapActions('coaches' , ['getAllCoachesFromDb']),
    redirectToNewCoach(){
      this.$router.push('/register')
    }
  }, 
  created(){
    this.getAllCoachesFromDb();
  },
};
</script>

<style scoped>
.coach-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
}

svg{
  margin-right: 5px;
}
</style>
