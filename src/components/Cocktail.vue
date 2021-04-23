<template>
  <div class="cocktail" @click="onClick">
    <img
      class="cocktail-avatar"
      :src="cocktailDetails.thumbnail"
      alt="cocktail"
    />
    <div class="about-cocktail">
      <h4 class="cocktail-name">{{ cocktailDetails.name }}</h4>
      <p class="is-alcoholic">{{ cocktailDetails.isAlcoholic }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cocktail",
  props: {
    cocktailDetails: Object,
  },
  methods: {
    onClick() {
      console.log(this.cocktailDetails);
    },
  },
};
</script>

<style scoped>
.cocktail {
  display: flex;
  align-items: center;
  padding: 1rem;
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
.about-cocktail {
}
.cocktail-name {
  color: #66a6ff;
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
}
.is-alcoholic {
  color: #60728a;
  font-size: 1rem;
  font-weight: 400;
}
</style>