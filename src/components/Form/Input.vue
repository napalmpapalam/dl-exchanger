<template>
  <div class="input">
    <md-field>
      <label>Сумма в {{ labelText }}</label>
      <md-input type="number"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  props: ["labelText"],
  name: "Input",
  data: () => ({
    type: null,
    number: null
  })
};
</script>

<style>
md-input {
  max-width: 8rem;
  margin: 0 1rem 0 0;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media only screen and (max-width: 768px) {
  .input {
    max-width: 90%;
    margin: 0 0 0 1rem;
  }
}
</style>
