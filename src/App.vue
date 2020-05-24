<template>
  <div id="app">
    <router-view v-bind:db="db" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      db: {
        info: null,
        currencies: null,
        selected: {
          client: "",
          service: ""
        },
        reserve: {
          BTC: "4",
          UAH: "30.000",
          ETH: "18",
          EUR: "1.000",
          USD: "1.221"
        }
      }
    };
  },
  mounted() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USD,EUR,UAH&tsyms=BTC,ETH,USD,EUR,UAH"
      )
      .then(response => {
        this.db.info = response.data;
        this.db.currencies = Object.keys(response.data);
      });
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
