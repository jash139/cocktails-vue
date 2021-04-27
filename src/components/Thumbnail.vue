<template>
  <div class="thumbnail">
    <figure>
      <img
        class="cocktail-image"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
      />
    </figure>
    <div class="cocktail-name-div">
      <h3 class="cocktail-name">{{ cocktail.strDrink }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    cocktail: Object,
  },
};
</script>

<style scoped>
.thumbnail {
  position: relative;
  margin-bottom: 1rem;
  max-width: 500px;
}
figure {
  /* width: 300px; container-width */
  overflow: hidden;
  margin: 0;
}
figure img {
  display: block;
  margin: -21.875% 0;
  width: 100%;
}
.cocktail-image {
  width: 100%;
}
.cocktail-name-div {
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
}
.cocktail-name {
  color: white;
  font-family: "Tangerine", cursive;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
</style>