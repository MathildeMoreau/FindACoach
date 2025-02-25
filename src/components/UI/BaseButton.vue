<template>
  <button><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
    background: #D95D39;
    padding: 10px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
}

button:hover{
    background: #d5451d;
    cursor: pointer;
}

</style>