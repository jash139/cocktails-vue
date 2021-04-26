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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 0;
}
</style>