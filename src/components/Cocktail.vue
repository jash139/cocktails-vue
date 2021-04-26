<template>
  <div class="cocktail" @click="onClick">
    <img class="cocktail-avatar" :src="cocktail.strDrinkThumb" alt="cocktail" />
    <div class="about-cocktail">
      <h4 class="cocktail-name">{{ cocktail.strDrink }}</h4>
      <p class="is-alcoholic">{{ cocktail.strAlcoholic }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Cocktail",
  props: {
    cocktail: Object,
  },
  methods: {
    ...mapActions(["setActiveCocktail"]),
    onClick() {
      this.setActiveCocktail(this.cocktail);
    },
  },
};
</script>

<style scoped>
.cocktail {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.cocktail:hover {
  background-color: rgb(217, 237, 255);
  cursor: pointer;
}
.cocktail-avatar {
  border-radius: 10rem;
  height: 60px;
  margin: 0 1rem;
  width: 60px;
}
.cocktail-name {
  color: #66a6ff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
}
.is-alcoholic {
  color: #60728a;
  font-size: 0.8rem;
  font-weight: 400;
}
</style>