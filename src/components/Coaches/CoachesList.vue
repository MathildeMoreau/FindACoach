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
<div v-if="isLoading">
  <base-spinner></base-spinner>
</div>
<div v-if="hasCoaches && !isLoading">
    <coach-filter @change-filter="setFilter"></coach-filter>
  
    <div v-for="coach in filteredCoaches" :key="coach.id">
      <coach-card :coach="coach"></coach-card>
    </div>
</div>
<div v-if="!hasCoaches && !isLoading">
  <h2>No coach for now !</h2>
</div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import { mapActions, mapGetters } from "vuex";
import CoachCard from './CoachCard.vue';
import CoachFilter from "./CoachFilter.vue";
import BaseSpinner from "../UI/BaseSpinner.vue";

export default {
  components: { BaseButton, CoachCard, CoachFilter, BaseSpinner },
  data(){
    return {
      isLoading: false,
      activeFilter: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    ...mapGetters('coaches', ["getAllCoaches"]),
    ...mapGetters('coaches', ["hasCoaches"]),
    filteredCoaches(){
      const coaches = this.getAllCoaches;
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.value.includes('frontend')){
          return true;
        }
        if (this.activeFilter.backend && coach.areas.value.includes('backend')){
          return true;
        }
        if (this.activeFilter.career && coach.areas.value.includes('career')){
          return true;
        }
        console.log(coach);
        return false;
      })
    }
  },
  methods: {
    ...mapActions('coaches' , ['getAllCoachesFromDb']),
    redirectToNewCoach(){
      this.$router.push('/register')
    },
    setFilter(updatedFilter){
      this.activeFilter = updatedFilter;
    },
    async loadCoaches(){
      this.isLoading = true;
      await this.getAllCoachesFromDb();
      this.isLoading = false;
    }
  }, 
  created(){
    this.loadCoaches();
  }
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
