<template>
  <div id="app">
    <v-nav></v-nav>
    <hr>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vNav from './components/commons/Nav.vue'
import vFooter from './components/commons/Footer.vue'

export default {
  name: 'App',
  components: {
    vNav,
    vFooter
  }
}
</script>

<style>
</style>