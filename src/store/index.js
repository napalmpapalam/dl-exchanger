import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    axiosCurrencies: async function({ commit }) {
      await axios
        .get(
          "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USD,EUR&tsyms=BTC,ETH,USD,EUR"
        )
        .then(response => {
          commit("updateCurrencies", response.data);
          commit("updateCurrenciesID", Object.keys(response.data));
        });
    }
  },
  mutations: {
    updateCurrencies(state, currencies) {
      state.currencies = currencies;
    },
    updateCurrenciesID(state, currenciesID) {
      state.currenciesID = currenciesID;
    },
    updateClientCurrencyID(state, clientCurrencyID) {
      state.clientCurrencyID = clientCurrencyID;
    },
    updateServiceCurrencyID(state, serviceCurrencyID) {
      state.serviceCurrencyID = serviceCurrencyID;
    },
    updateInputValue(state, inputValue) {
      state.inputValue = inputValue;
    },
    updateValidationState(state, boolean) {
      state.isValidated = boolean;
    },
    clearForm(state, emptyString) {
      state.clientCurrencyID = emptyString;
      state.serviceCurrencyID = emptyString;
      state.inputValue = emptyString;
    }
  },
  state: {
    currencies: [],
    currenciesID: [],
    clientCurrencyID: "",
    serviceCurrencyID: "",
    inputValue: "",
    isValidated: null,
    reserve: {
      BTC: 4.1,
      ETH: 18.5,
      EUR: 1545.2,
      USD: 1221.11
    }
  },
  getters: {
    allCurrencies(state) {
      return state.currencies;
    },
    allCurrenciesID(state) {
      return state.currenciesID;
    },
    getClientCurrencyID(state) {
      return state.clientCurrencyID;
    },
    getServiceCurrencyID(state) {
      return state.serviceCurrencyID;
    },
    getReserve(state) {
      return state.reserve;
    },
    getInputValue(state) {
      return state.inputValue;
    },
    getConvertedValue(state) {
      let client = state.clientCurrencyID;
      let service = state.serviceCurrencyID;

      if (client && service) {
        let rate = state.currencies[client][service];
        let result = state.inputValue * rate;
        //округление
        return +result.toFixed(2);
      }
    },
    getValidationState(state) {
      return state.isValidated;
    }
  }
});
