<template>
  <div class="root">
    <div class="main">
      <Header />
      <Body />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Body from "./Body";

export default {
  name: "Home",
  components: {
    Header,
    Body,
  },
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main {
  background-color: rgb(217, 237, 255);
  border-radius: 10px;
  min-height: 80vh;
  min-width: 80%;
}
</style>