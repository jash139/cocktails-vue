<template>
  <div class="root">
    <div class="main">
      <Header />
      <SearchBar />
      <h1>Home</h1>
      <Thumbnail />
      <AboutCocktail />
      <Ingredients />
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Ingredients from "./Ingredients";
import Thumbnail from "./Thumbnail";
import AboutCocktail from "./AboutCocktail";
import Header from "./Header";

export default {
  name: "Home",
  components: {
    SearchBar,
    Ingredients,
    Thumbnail,
    AboutCocktail,
    Header,
  },
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main {
  min-height: 80vh;
  background-color: rgb(217, 237, 255);
  min-width: 80%;
}
</style>