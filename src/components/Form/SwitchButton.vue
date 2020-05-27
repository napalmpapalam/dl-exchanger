<template>
  <div>
    <button type="button" class="switcher" @click="go">
      <span class="material-icons" disabled>autorenew</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // data: function() {
  //   return {
  //     type: null,
  //     button: null
  //   };
  // },
  computed: {
    ...mapGetters([
      "allCurrencies",
      "allCurrenciesID",
      "getClientCurrencyID",
      "getServiceCurrencyID",
      "getInputValue",
      "getConvertedValue",
      "getValidationState",
      "getReserve"
    ])
  },
  name: "SwitchButton",
  methods: {
    go: function() {
      let clientCurrencyID = this.getClientCurrencyID;
      let serviceCurrencyID = this.getServiceCurrencyID;
      let inputValue = this.getConvertedValue;
      if (clientCurrencyID && serviceCurrencyID && this.getInputValue > 0) {
        this.$store.commit("updateClientCurrencyID", serviceCurrencyID);
        this.$store.commit("updateServiceCurrencyID", clientCurrencyID);
        this.$store.commit("updateInputValue", inputValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.switcher {
  background: none;
  border: none;
  margin: 0 3.5rem 0 3.5rem;
}

.material-icons {
  font-size: 2rem;
  color: #444;
}

.switcher:hover,
span:hover {
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .switcher {
    margin: 3rem 0 0 0;
  }
}
</style>
