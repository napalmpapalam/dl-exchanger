<template>
  <div class="md-layout-item">
    <md-field>
      <label for="currency">{{ labelText }}</label>
      <md-select
        v-model="currency"
        name="currency"
        id="currency"
        placeholder="BTC"
        @md-selected="select(currency)"
      >
        <md-option value="BTC">BTC</md-option>
        <md-option value="UAH">UAH</md-option>
        <md-option value="EUR">EUR</md-option>
        <md-option value="ETH">ETH</md-option>
      </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: "",
      arr: []
    };
  },
  props: ["labelText", "selectedCurrencies"],
  methods: {
    select: function() {
      if (this.labelText == "Отдаете") {
        this.selectedCurrencies.client = this.currency;
      } else {
        this.selectedCurrencies.service = this.currency;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  max-width: 5rem;
  margin: 0 1.7rem 0 0;
}

@media only screen and (max-width: 768px) {
  .md-layout-item {
    max-width: 90%;
    margin: 0 0 0 1rem;
  }
}
</style>
