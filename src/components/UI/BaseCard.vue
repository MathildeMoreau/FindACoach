<template>
    <div class="card-title">
      <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
      <div class="areas-list">
        <span v-for="area in coach.areas.value" :key="area" class="area-pill" :class="area" ref="area">{{ area }}</span>
      </div>
    </div>
    <p>{{ coach.description }}</p>
    <p>{{ coach.hourlyRate }}€ / hour</p>
</template>

<script>
export default {
  props: ["coach"]
};
</script>

<style scoped>

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

</style>
