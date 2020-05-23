<template>
  <md-toolbar class="md-medium">
    <h1>DLExchanger</h1>
    <p>Check ID</p>
  </md-toolbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.md-toolbar {
  display: flex;
  justify-content: space-between;
}

.md-toolbar.md-theme-default {
  background: #4055ae;
  color: #fff;
}

h1 {
  font-weight: 700;
  font-size: 2.2rem;
}

p {
  font-size: 1rem;
  margin: 0 0.7rem;
  opacity: 0.7;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
