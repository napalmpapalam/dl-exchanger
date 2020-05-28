<template>
  <span>
    <router-link
      v-if="isValid"
      to="/success"
      tag="md-button"
      class="md-raised md-primary"
      type="submit"
      >ОБМЕНЯТЬ СУММУ</router-link
    >
    <router-link
      v-else
      to="/success"
      tag="md-button"
      class="md-raised"
      disabled
      type="submit"
      >УКАЖИТЕ СУММУ</router-link
    >
  </span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getValidationState"]),
    isValid: {
      get: function() {
        return this.getValidationState;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  margin: 0 0 5rem 0;
}

@media only screen and (max-width: 768px) {
  .md-button {
    margin: 0 0 2rem 0;
  }
}
</style>
