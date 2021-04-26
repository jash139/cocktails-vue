<template>
  <div class="ingredients-div">
    <Subheading text="Ingredients" />
    <div class="ingredients-menu">
      <Ingredient
        v-for="ingredient in activeCocktailIngredients"
        :key="ingredient"
        :ingredient="ingredient"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Subheading from "./Subheading";
import Ingredient from "./Ingredient";

export default {
  name: "Ingredients",
  computed: mapGetters(["activeCocktailIngredients"]),
  components: {
    Subheading,
    Ingredient,
  },
};
</script>

<style scoped>
.ingredients-div {
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom-right-radius: 10px;
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