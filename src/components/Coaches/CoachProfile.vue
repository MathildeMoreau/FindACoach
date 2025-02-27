<template>
  <h1>Coach profile</h1>
  <base-card :coach="coach"></base-card>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";

export default {
  components: { BaseCard },
  props: ["id"],
  computed: {
    coach() {
      return this.$store.getters["coaches/getAllCoaches"].find((c) => c.id === this.id);
    },
  },
};
</script>

<style></style>
