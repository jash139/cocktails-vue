<template>
  <div class="about-cocktail">
    <Thumbnail :cocktail="activeCocktail" />
    <div class="cocktail-details">
      <p class="is-alcoholic">{{ activeCocktail.strAlcoholic }}</p>
      <p class="instruction">
        {{ activeCocktail.strInstructions }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Thumbnail from "./Thumbnail";

export default {
  name: "AboutCocktail",
  computed: mapGetters(["activeCocktail"]),
  components: {
    Thumbnail,
  },
};
</script>

<style scoped>
.about-cocktail {
  max-width: 500px;
}
.cocktail-details {
  margin-left: 1rem;
  max-height: 250px;
  overflow-y: auto;
}
.cocktail-details::-webkit-scrollbar {
  width: 1.5rem;
}
.cocktail-details::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
.is-alcoholic {
  color: #66a6ff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.instruction {
  color: #60728a;
  font-size: 1rem;
}
</style>