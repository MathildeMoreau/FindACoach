<template>
  <div class="message-container">
    <h4>From : <a :href="`mailto:${message.email}`">{{ message.email }}</a></h4>
    <p>{{ message.message }}</p>
  </div>
</template>

<script>
export default {
    props: ['message']

}
</script>

<style scoped>

.message-container{
    border: 1px solid rgba(198, 197, 197, 0.456);
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
    width: 60%;
    padding: 20px;
    margin: auto;
    margin-bottom: 20px;
}

</style>