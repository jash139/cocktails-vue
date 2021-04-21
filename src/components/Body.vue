<template>
  <div class="body">
    <Cocktails />
    <Thumbnail />
    <AboutCocktail />
    <Ingredients />
  </div>
</template>

<script>
import Cocktails from "./Cocktails";
import Ingredients from "./Ingredients";
import Thumbnail from "./Thumbnail";
import AboutCocktail from "./AboutCocktail";

export default {
  name: "Body",
  components: {
    Cocktails,
    Ingredients,
    Thumbnail,
    AboutCocktail,
  },
};
</script>