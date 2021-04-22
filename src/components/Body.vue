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
}
</style>