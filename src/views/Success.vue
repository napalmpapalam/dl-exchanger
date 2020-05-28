<template>
  <div class="about">
    <Header />
    <section>
      <div>
        <span class="material-icons">check_circle</span>
      </div>
      <h1>Поздравляем!</h1>
      <h2>
        Вы успешно обменяли: {{ clientCurrency }} {{ clientCurrencyID }} на
        {{ serviceCurrency }}
        {{ serviceCurrencyID }}
      </h2>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "allCurrenciesID",
      "getClientCurrencyID",
      "getServiceCurrencyID",
      "getInputValue",
      "getServiceValue"
    ]),
    clientCurrency: {
      get: function() {
        const VALUE = this.getInputValue;
        this.$store.commit("updateInputValue", "");
        return VALUE;
      }
    },
    clientCurrencyID: {
      get: function() {
        const ID = this.getClientCurrencyID;
        this.$store.commit("updateClientCurrencyID", "");
        return ID;
      }
    },
    serviceCurrency: {
      get: function() {
        const VALUE = this.getServiceValue;
        this.$store.commit("updateServiceValue", "");
        return VALUE;
      }
    },
    serviceCurrencyID: {
      get: function() {
        const ID = this.getServiceCurrencyID;
        this.$store.commit("updateServiceCurrencyID", "");
        return ID;
      }
    }
  },
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.material-icons {
  font-size: 10rem;
  color: rgb(84, 145, 89);
}
h1 {
  font-size: 2.5rem;
  line-height: 4rem;
}
h2 {
  font-size: 1.5rem;
  line-height: 2rem;
}
section {
  margin-top: 8rem;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  section {
    margin-top: 2rem;
  }
}
</style>
