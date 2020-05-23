<template>
  <div class="md-layout-item">
    <md-field>
      <label for="currency">{{ labelText }}</label>
      <md-select name="currency" id="currency" placeholder="BTC">
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
  props: ["labelText"]
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
