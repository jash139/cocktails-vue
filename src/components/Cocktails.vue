<template>
  <div class="cocktails-div">
    <Subheading text="Drinks & Cocktails" />
    <div class="cocktails-menu">
      <MenuItem :cocktailDetails="cocktailDetails" />
    </div>
  </div>
</template>

<script>
import Subheading from "./Subheading";
import MenuItem from "./MenuItem";

export default {
  name: "Cocktails",
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
    MenuItem,
  },
};
</script>

<style scoped>
.cocktails-div {
  background-color: rgba(255, 255, 255, 0.7);
}
.cocktails-menu {
}
</style>