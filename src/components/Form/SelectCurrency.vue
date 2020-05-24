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
        <md-option v-for="item in db.currencies" :key="item" :value="item">
          {{ item }}
        </md-option>
      </md-select>
    </md-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: ""
    };
  },
  props: ["labelText", "db"],
  methods: {
    select: function() {
      if (this.labelText == "Отдаете") {
        this.db.selected.client = this.currency;
      } else {
        this.db.selected.service = this.currency;
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
