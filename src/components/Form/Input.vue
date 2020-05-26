<template>
  <div class="input">
    <md-field v-model="hasErrors" :class="errorsClass">
      <label>
        Сумма в
        {{ isReceiver === "true" ? serviceCurrencyID : clientCurrencyID }}
      </label>

      <md-input type="number"></md-input>

      <span class="md-error">There is an error</span>
    </md-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["labelText", "isReceiver"],
  data: () => ({
    hasErrors: false
  }),
  computed: {
    ...mapGetters(["getClientCurrencyID", "getServiceCurrencyID"]),
    clientCurrencyID: {
      get: function() {
        return this.getClientCurrencyID;
      }
    },
    serviceCurrencyID: {
      get: function() {
        return this.getServiceCurrencyID;
      }
    },
    errorsClass() {
      return {
        "md-invalid": this.hasErrors
      };
    }
  }
};
</script>

<style>
md-input {
  max-width: 8rem;
  margin: 0 1rem 0 0;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media only screen and (max-width: 768px) {
  .input {
    max-width: 90%;
    margin: 0 0 0 1rem;
  }
}
</style>
