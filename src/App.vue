<template>
  <nav>
    <router-link to="/">Acceuil</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'Country', params: { name: 'France' } }"
      >Mon Pays</router-link
    >
    |
    <router-link :to="{ name: 'Country', params: { name: 'Espagne' } }">
      Pays N°2
    </router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
