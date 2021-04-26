<template>
  <div class="body">
    <Cocktails />
    <AboutCocktail />
    <Ingredients />
  </div>
</template>

<script>
import Cocktails from "./Cocktails";
import AboutCocktail from "./AboutCocktail";
import Ingredients from "./Ingredients";

export default {
  name: "Body",
  components: {
    Cocktails,
    AboutCocktail,
    Ingredients,
  },
};
</script>

<style scoped>
.body {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr) minmax(0, 0.75fr);
  grid-column-gap: 0;
}
</style>