<template>
  <div class="root">
    <div class="main">
      <Header />
      <IngredientModal />
      <Body />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Body from "./Body";
import IngredientModal from "./IngredientModal";

export default {
  name: "Home",
  components: {
    Header,
    Body,
    IngredientModal,
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
  max-width: 1200px;
}
</style>