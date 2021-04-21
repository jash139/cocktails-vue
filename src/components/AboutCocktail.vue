<template>
  <div class="about-cocktail">
    <p class="is-alcoholic">Non Alcoholic</p>
    <p class="instruction">
      Rub the rim of the glass with the lime slice to make the salt stick to it.
      Take care to moisten only the outer rim and sprinkle the salt on it. The
      salt should present to the lips of the imbiber and never mix into the
      cocktail. Shake the other ingredients with ice, then carefully pour into
      the glass.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutCocktail",
};
</script>

<style scoped>
.about-cocktail {
  padding: 1rem;
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