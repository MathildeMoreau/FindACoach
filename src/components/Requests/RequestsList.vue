<template>
  <h1>Requests List</h1>

  <div v-for="message in getAllMessages" :key="message.id">
    <request-message :message="message"></request-message>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RequestMessage from './RequestMessage.vue';

export default {
  components: { RequestMessage },
  computed: {
    ...mapGetters('requests', ['getAllMessages'])
  },
  methods: {
    ...mapActions('requests', ['getAllMessagesFromDb'])
  },
  created(){
    this.getAllMessagesFromDb();
  }

}
</script>

<style>

</style>