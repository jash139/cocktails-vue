<template>
  <h2 class="subheading">{{ text }}</h2>
</template>

<script>
export default {
  name: "Subheading",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.subheading {
  color: #66a6ff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
  text-align: center;
}
</style>