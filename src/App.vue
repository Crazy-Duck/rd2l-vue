<template>
  <div id="app">
    <router-view name="navigation"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
    background-image: url('./assets/background.jpg');
    background-attachment: fixed;
    background-position: 50% 50%;
}

.table {
  background-color: rgba(255,255,255,0.8);
}

.hero, .tab{
  background-color: rgba(255,255,255,0.7);
}
</style>
