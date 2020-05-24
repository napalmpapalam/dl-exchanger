<template>
  <div class="home">
    <Header />
    <Content :db="db" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
  props: ["db"],
  name: "Home",
  components: {
    Header,
    Content
  }
};
</script>
