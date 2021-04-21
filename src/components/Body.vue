<template>
  <Thumbnail />
  <AboutCocktail />
  <Ingredients />
</template>

<script>
import Ingredients from "./Ingredients";
import Thumbnail from "./Thumbnail";
import AboutCocktail from "./AboutCocktail";

export default {
  name: "Body",
  components: {
    Ingredients,
    Thumbnail,
    AboutCocktail,
  },
};
</script>