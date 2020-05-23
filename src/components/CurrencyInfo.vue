<template>
  <div class="info">
    <div class="info__into">
      <div>
        <strong>
          <p>Курс</p>
          <p
            v-if="
              Object.values(selectedCurrencies)
                .sort()
                .join('') == [...'BTCUAH'].sort()
            "
          >
            {{ rates.btc_uah }}
          </p>

          <p
            v-else-if="
              Object.values(selectedCurrencies)
                .sort()
                .join('') == [...'ETHEUR'].sort()
            "
          >
            {{ rates.eth_eur }}
          </p>
          <p
            v-else-if="
              Object.values(selectedCurrencies)
                .sort()
                .join('') == [...'EURUAH'].sort()
            "
          >
            {{ rates.eur_uah }}
          </p>
          <p
            v-else-if="
              Object.values(selectedCurrencies)
                .sort()
                .join('') == [...'BTCETH'].sort()
            "
          >
            {{ rates.btc_eth }}
          </p>
          <p
            v-else-if="
              Object.values(selectedCurrencies)
                .sort()
                .join('') == [...'BTCEUR'].sort()
            "
          >
            {{ rates.btc_eur }}
          </p>
          <p
            v-else-if="
              Object.values(selectedCurrencies)
                .sort()
                .join('') == [...'ETHUAH'].sort()
            "
          >
            {{ rates.eth_uah }}
          </p>
        </strong>
      </div>

      <div>
        <strong>
          <p>Резерв</p>
          <p v-if="selectedCurrencies.service == 'BTC'">
            {{ reserve.btc }}
          </p>

          <p v-else-if="selectedCurrencies.service == 'UAH'">
            {{ reserve.uah }}
          </p>

          <p v-else-if="selectedCurrencies.service == 'ETH'">
            {{ reserve.eth }}
          </p>
          <p v-else-if="selectedCurrencies.service == 'EUR'">
            {{ reserve.eur }}
          </p>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      rates: {
        btc_uah: "1 BTC - 2 378 UAH",
        btc_eth: "1 BTC - 44,37 ETH",
        btc_eur: "1 BTC - 8 469 EUR",
        eth_eur: "1 ETH - 587 EUR",
        eth_uah: "1 ETH - 5 567 UAH",
        eur_uah: "1 EUR - 29,19 UAH"
      },
      reserve: {
        btc: "4 BTC",
        uah: "30 000 UAH",
        eth: "18 ETH",
        eur: "1000 EUR"
      }
    };
  },
  props: ["selectedCurrencies"]
};
</script>

<style lang="scss" scoped>
.info {
  opacity: 0.8;
  margin: 0;
  padding: 0;
  display: block;
  width: 100vw;
  font-size: 1rem;
}

.info__into {
  display: flex;
  justify-content: space-around;
}
</style>
