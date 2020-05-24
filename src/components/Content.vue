<template>
  <div class="content">
    <h1>Обменник</h1>
    <Form :db="db" />
    <SumbitButton />
    <CurrencyInfo :db="db" />
  </div>
</template>

<script>
import Form from "@/components/Form/Form.vue";
import CurrencyInfo from "@/components/CurrencyInfo.vue";
import SumbitButton from "@/components/SumbitButton.vue";

export default {
  props: ["db"],
  data: function() {
    return {};
  },
  components: {
    Form,
    CurrencyInfo,
    SumbitButton
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.content h1 {
  margin: 10rem 0 3rem 0;
  font-size: 2.7rem;
  color: #4055ae;
}

@media only screen and (max-width: 768px) {
  .content h1 {
    margin: 2rem;
    font-size: 2rem;
  }
}
</style>
