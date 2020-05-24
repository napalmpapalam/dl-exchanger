<template>
  <div class="form">
    <SelectCurrency :db="db" labelText="Отдаете" />
    <Input :labelText="db.selected.client" />
    <SwitchButton />
    <SelectCurrency :db="db" labelText="Получаете" />
    <Input :labelText="db.selected.service" />
  </div>
</template>

<script>
import SelectCurrency from "@/components/Form/SelectCurrency.vue";
import Input from "@/components/Form/Input.vue";
import SwitchButton from "@/components/Form/SwitchButton.vue";

export default {
  props: ["db"],
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
