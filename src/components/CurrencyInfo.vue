<template>
  <div class="info">
    <div class="info__into">
      <div class="info__text">
        <strong v-if="db.selected.client && db.selected.service">
          <p>Курс</p>
          <p>
            1 {{ db.selected.client }} =
            {{ db.info[db.selected.client][db.selected.service] }}
            {{ db.selected.service }}
          </p>
        </strong>
      </div>

      <div class="info__text">
        <strong v-if="db.selected.service">
          <p>Резерв</p>
          <p>{{ db.reserve[db.selected.service] }} {{ db.selected.service }}</p>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["db"]
};
</script>

<style lang="scss" scoped>
.info {
  opacity: 0.8;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
.info__text {
  width: 10rem;
}
.info__into {
  display: flex;
  justify-content: space-around;
}
</style>
