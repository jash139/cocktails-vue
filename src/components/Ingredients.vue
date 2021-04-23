<template>
  <div class="ingredients-div">
    <Subheading text="Ingredients" />
    <div class="ingredients-menu"></div>
  </div>
</template>

<script>
import Subheading from "./Subheading";

export default {
  name: "Ingredients",
  data() {
    return {
      cocktailDetails: {
        thumbnail:
          "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80",
        name: "Margarita",
        isAlcoholic: "Non Alcoholic",
      },
    };
  },
  components: {
    Subheading,
  },
};
</script>

<style scoped>
.ingredients-div {
  background-color: rgba(255, 255, 255, 0.7);
}
.ingredients-menu {
  height: 500px;
  overflow-y: auto;
}
.ingredients-menu::-webkit-scrollbar {
  width: 1.5rem;
}
.ingredients-menu::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
</style>