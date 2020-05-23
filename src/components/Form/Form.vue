<template>
  <div class="form">
    <SelectCurrency
      v-bind:selectedCurrencies="selectedCurrencies"
      labelText="Отдаете"
    />
    <Input :labelText="selectedCurrencies.client" />
    <SwitchButton />
    <SelectCurrency
      v-bind:selectedCurrencies="selectedCurrencies"
      labelText="Получаете"
    />
    <Input :labelText="selectedCurrencies.service" />
  </div>
</template>

<script>
import SelectCurrency from "@/components/Form/SelectCurrency.vue";
import Input from "@/components/Form/Input.vue";
import SwitchButton from "@/components/Form/SwitchButton.vue";

export default {
  props: ["selectedCurrencies"],
  components: {
    SelectCurrency,
    Input,
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

@media only screen and (max-width: 768px) {
  .form {
    flex-direction: column;
    margin: 0;
  }
}
</style>
