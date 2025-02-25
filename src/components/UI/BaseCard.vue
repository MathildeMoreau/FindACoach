<template>
  <div class="card-content">
    <div class="card-title">
      <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
      <div class="areas-list">
        <span v-for="area in coach.areas" :key="area" class="area-pill" :class="area" ref="area">{{ area }}</span>
      </div>
    </div>
    <p>{{ coach.description }}</p>
    <p>{{ coach.hourlyRate }}€ / hour</p>
    <base-button @click="redirectToMessages" :coach="coach">Contact me</base-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  props: ["coach"],
  methods: {
    ...mapMutations('coaches', ['writeToCoach']),
    redirectToMessages(){
      this.writeToCoach(this.coach.id);
      this.$router.push('/contact');
    }
  },
  computed: {
    ...mapState('coaches', ['workField']),
  },
  data(){
    return {
      area: ''
    }
  }
};
</script>

<style scoped>
.card-content{
    margin: 20px;
    padding: 10px;
    border: 1px solid rgba(198, 197, 197, 0.456);
    width: 80%;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
    display: flex;
    flex-direction: column;
}

.card-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.areas-list {
    display: flex;
    flex-direction: row;

}

.area-pill {
  padding: 5px 15px;
  border-radius: 10px;
  font-family: "Work Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  margin: 0 10px;
}

.frontend {
  background: #d4adcf;
}

.backend {
  background: #dbad6a;
}

.career {
  background: #779be7;
}

button{
  width: 30%;
  align-self: center;
}

</style>
