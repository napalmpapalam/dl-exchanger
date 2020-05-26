<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["allCurrencies", "allCurrenciesID"])
  },
  methods: {
    ...mapActions(["axiosCurrencies"])
  },
  mounted() {
    this.axiosCurrencies();
  }
};
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media only screen and (max-width: 620px) {
  #app {
    font-size: 0.8rem;
  }
}
</style>
