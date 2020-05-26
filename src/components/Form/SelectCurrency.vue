<template>
  <div class="md-layout-item">
    <md-field>
      <label for="currency">{{ labelText }}</label>
      <md-select
        v-model="currency"
        name="currency"
        id="currency"
        placeholder="BTC"
        required
      >
        <md-option v-for="item in allCurrenciesID" :key="item" :value="item">{{
          item
        }}</md-option>
      </md-select>
    </md-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "allCurrenciesID",
      "getClientCurrencyID",
      "getServiceCurrencyID"
    ]),

    currency: {
      get: function() {
        if (this.labelText === "Отдаете") {
          return this.getClientCurrencyID;
        } else {
          return this.getServiceCurrencyID;
        }
      },
      set: function(val) {
        if (this.labelText == "Отдаете") {
          this.$store.commit("updateClientCurrencyID", val);
        } else {
          this.$store.commit("updateServiceCurrencyID", val);
        }
      }
    }
  },

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
