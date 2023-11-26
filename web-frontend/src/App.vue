<template>
  <div id="links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
div#links {
  display:flex;
}

div#links > a {
  padding: 1em;
  margin-right: 1em;
  background-color: red;
  border-radius: .5em;
  color: white
}
</style>
