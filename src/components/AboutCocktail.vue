<template>
  <div class="about-cocktail">
    <Thumbnail :cocktail="activeCocktail" />
    <p class="is-alcoholic">{{ activeCocktail.strAlcoholic }}</p>
    <p class="instruction">
      {{ activeCocktail.strInstructions }}
    </p>
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
  padding: 0 1rem;
  max-width: 500px;
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