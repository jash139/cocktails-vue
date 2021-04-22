<template>
  <div class="thumbnail">
    <img
      class="cocktail-image"
      src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80"
      alt="cocktail"
    />
    <div class="cocktail-name-div">
      <h3 class="cocktail-name">Margarita</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
};
</script>

<style scoped>
.thumbnail {
  position: relative;
  margin-bottom: 1rem;
  max-width: 500px;
}
.cocktail-image {
  width: 100%;
}
.cocktail-name-div {
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  border-radius: 8px;
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
}
</style>