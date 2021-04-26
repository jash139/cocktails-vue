<template>
  <div class="cocktails-div">
    <Subheading text="Drinks & Cocktails" />
    <div class="cocktails-menu">
      <Cocktail
        v-for="cocktail in allCocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Subheading from "./Subheading";
import Cocktail from "./Cocktail";

export default {
  name: "Cocktails",
  computed: mapGetters(["allCocktails"]),
  components: {
    Subheading,
    Cocktail,
  },
};
</script>

<style scoped>
.cocktails-div {
  background-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 10px;
}
.cocktails-menu {
  max-height: 500px;
  overflow-y: auto;
}
.cocktails-menu::-webkit-scrollbar {
  width: 1.5rem;
}
.cocktails-menu::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
</style>