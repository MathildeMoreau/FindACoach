<template>
  <form action="">
    <div>
        <label for="">Write to {{ getCurrentCoach.firstName }}</label>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['coach'],
    computed: {
        ...mapGetters(['getCurrentCoach'])
    }

}
</script>

<style>

</style>