<template>
  <button class="switcher">
    <span class="material-icons">autorenew</span>
  </button>
</template>

<script>
export default {
  name: "SwitchButton"
};
</script>

<style lang="scss" scoped>
.switcher {
  background: none;
  border: none;
  margin: 0 3.5rem 0 3.5rem;
}

.material-icons {
  font-size: 2rem;
  color: #444;
}

.switcher:hover,
span:hover {
  cursor: pointer;
}
</style>
