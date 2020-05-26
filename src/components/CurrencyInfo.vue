<template>
  <div class="info">
    <div class="info__into">
      <div class="info__text">
        <strong v-if="getClientCurrencyID && getServiceCurrencyID">
          <p>Курс</p>
          <p>
            1 {{ getClientCurrencyID }} =
            {{ allCurrencies[getClientCurrencyID][getServiceCurrencyID] }}
            {{ getServiceCurrencyID }}
          </p>
        </strong>
      </div>

      <div class="info__text">
        <strong v-if="getServiceCurrencyID">
          <p>Резерв</p>
          <p>
            {{ getReserve[getServiceCurrencyID] }} {{ getServiceCurrencyID }}
          </p>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getClientCurrencyID",
      "getServiceCurrencyID",
      "allCurrencies",
      "getReserve"
    ])
  }
};
</script>

<style lang="scss" scoped>
.info {
  opacity: 0.8;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
.info__text {
  width: 13rem;
}
.info__into {
  display: flex;
  justify-content: space-around;
}
</style>
