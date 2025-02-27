<template>
  <h1>Page not Found</h1>

  <base-button>
    <router-link to="/coaches">Home page</router-link>
  </base-button>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },

}
</script>

<style scoped>

a {
    color: white;
    text-decoration: none;
}

</style>