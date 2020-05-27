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
      "getReserve",
      "getServiceValue"
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
        return this.getInputValue;
      },
      set: function(input) {
        let number = +input;
        let client = this.getClientCurrencyID;
        let service = this.getServiceCurrencyID;

        let rate = this.allCurrencies[client][service];
        let convertedValue = +(number * rate).toFixed(2);
        //validation
        if (isNaN(number) || number <= 0 || !number) {
          this.$store.commit("updateValidationState", false);
        } else if (this.getConvertedValue > this.getReserve[service]) {
          this.$store.commit("updateValidationState", false);
        } else if (this.getConvertedValue < this.getReserve[service]) {
          this.$store.commit("updateValidationState", true);
        }
        // if all valid return result
        let result = Math.floor(+number.toFixed(2));

        if (!isNaN(number) && number > 0 && number) {
          this.$store.commit("updateInputValue", result);
          this.$store.commit("updateServiceValue", convertedValue);
        }
        // if input is empty return 0
        if (number === 0 || number === "") {
          this.$store.commit("updateInputValue", 0);
          this.$store.commit("updateServiceValue", 0);
        }
      }
    },
    convertedValue: {
      get: function() {
        return this.getServiceValue;
      },
      set: function(input) {
        let number = +input;
        let client = this.getClientCurrencyID;
        let service = this.getServiceCurrencyID;
        let rate = this.allCurrencies[client][service];
        let reverseConvertedValue = +(number / rate).toFixed(2);
        //validation
        if (isNaN(number) || number <= 0 || !number) {
          this.$store.commit("updateValidationState", false);
        } else if (this.getConvertedValue > this.getReserve[service]) {
          this.$store.commit("updateValidationState", false);
        } else if (this.getConvertedValue < this.getReserve[service]) {
          this.$store.commit("updateValidationState", true);
        }
        // if all valid return result
        let result = reverseConvertedValue;

        if (!isNaN(number) && number > 0 && number) {
          this.$store.commit("updateInputValue", result);
          this.$store.commit("updateServiceValue", number);
        }
        // if input is empty return 0
        if (number === 0 || number === "") {
          this.$store.commit("updateInputValue", 0);
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
