<template>
    <header>
        <nav>
          <h1>FIND A COACH</h1>
          <div class="header-links">
              <router-link to="/coaches">Coaches</router-link>
              <router-link to="/requests">Requests</router-link>
          </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>

header{
    background: #D95D39;
    margin: 0;
    padding: 0;
    color: white;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1{
    margin-left: 2rem;
}

.header-links{
    display: flex;
    justify-content: space-around;
    width: 30%;
}

a{
    text-decoration: none;

}

a:visited{
    color: white;
}

a:hover{
    transform: scale(1.2);
    border-bottom: 3px solid white;
}

</style>