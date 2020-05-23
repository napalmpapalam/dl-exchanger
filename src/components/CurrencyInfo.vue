<template>
  <div class="info">
    <div class="info__into">
      <div>
        <strong>
          <p>Курс</p>
          <p>1 BTC = 20233.02 UAH</p>
        </strong>
      </div>
      <div>
        <strong>
          <p>Резерв</p>
          <p>20233.12302 UAH</p>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
