<template>
  <div class="form">
    <SelectCurrency labelText="Отдаете" />

    <md-field class="input" :class="messageClass">
      <label>Сумма в {{ getClientCurrencyID }}</label>
      <md-input v-model="inputValue"></md-input>
    </md-field>

    <SwitchButton />

    <SelectCurrency labelText="Получаете" />
    <md-field class="input" :class="messageClass">
      <label>Сумма в {{ getServiceCurrencyID }}</label>
      <md-input v-model="convertedValue"></md-input>
      <span class="md-error">Вы превысили резерв валюты</span>
    </md-field>
  </div>
</template>

<script>
import SelectCurrency from "@/components/Form/SelectCurrency.vue";
import SwitchButton from "@/components/Form/SwitchButton.vue";
import { mapGetters } from "vuex";

export default {
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
    ]),
    messageClass() {
      return {
        "md-invalid":
          this.getConvertedValue > this.getReserve[this.getServiceCurrencyID]
            ? true
            : false
      };
    },
    inputValue: {
      get: function() {
        if (typeof this.getInputValue == "number") {
          // return value type number
          return this.getInputValue;
        } else {
          // parsing string value from vuex state to number type
          let result = parseFloat(this.getInputValue);
          if (isNaN(result) || !result) {
            return null;
          }

          return result;
        }
      },
      set: function(input) {
        let service = this.getServiceCurrencyID;

        if (
          isNaN(input) ||
          input < 0 ||
          !input ||
          this.getConvertedValue > this.getReserve[service]
        ) {
          this.$store.commit("updateValidationState", false);
          this.$store.commit("updateInputValue", input);
          return input;
        } else {
          let result = +input;
          this.$store.commit("updateInputValue", +result.toFixed(2));
          if (
            this.getClientCurrencyID &&
            this.getServiceCurrencyID &&
            result > 0
          ) {
            this.$store.commit("updateValidationState", true);
          }
        }
      }
    },
    convertedValue: {
      get: function() {
        if (this.getClientCurrencyID && this.getServiceCurrencyID) {
          return this.getConvertedValue;
        }
        return console.log("nothing");
      },
      set: function(input) {
        // if input value is NaN return and set isValidated to false
        if (isNaN(input) || input < 0 || !input) {
          this.$store.commit("updateValidationState", false);
          this.$store.commit("updateInputValue", input);
          return input;
        }
        let client = this.getClientCurrencyID;
        let service = this.getServiceCurrencyID;

        if (client && service && input > 0) {
          let rate = this.allCurrencies[client][service];
          let reverseConvertedValue = input / rate;
          let result = +reverseConvertedValue.toFixed(2);
          //---------------------
          this.$store.commit("updateInputValue", result);
          this.$store.commit("updateValidationState", true);

          // check if converted value bigger then reserve value
          if (input > this.getReserve[service]) {
            this.$store.commit("updateValidationState", false);
          }
          return result;
        }
      }
    }
  },

  components: {
    SelectCurrency,
    SwitchButton
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  margin: 1rem 1rem 5rem 1rem;
  justify-content: center;
}

.input {
  max-width: 11rem;
}

@media only screen and (max-width: 768px) {
  .form {
    flex-direction: column;
    margin: 0 0 3rem 0;
  }

  .input {
    max-width: 90%;
    margin: 0 0 0 1rem;
  }
}
</style>
