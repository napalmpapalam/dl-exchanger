<template>
  <div class="home">
    <Header />
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
  name: "Home",
  components: {
    Header,
    Content
  }
};
</script>
