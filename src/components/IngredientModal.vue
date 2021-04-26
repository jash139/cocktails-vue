<template>
  <div id="ingredient-modal" :class="modalState ? 'modal-open' : 'modal-close'">
    <div class="modal-content">
      <i class="fas fa-times close" @click="toggleModalState" />
      <img
        :src="ingredient.thumbnail"
        alt="image"
        class="ingredient-thumbnail"
      />
      <h2 class="ingredient-heading">{{ ingredient.strIngredient }}</h2>
      <p class="ingredient-description">{{ ingredient.strDescription }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "IngredientModal",
  methods: {
    ...mapActions(["toggleModalState"]),
  },
  computed: mapGetters(["modalState", "ingredient"]),
};
</script>

<style>
.modal-open {
  position: fixed;
  z-index: 1;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-close {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: 1rem auto;
  padding: 3rem;
  max-width: 600px;
  min-height: 300px;
  position: relative;
}

.close {
  color: #aaaaaa;
  top: 1.5rem;
  right: 1.5rem;
  position: absolute;
  font-size: 1.5rem;
}

.close:hover,
.close:focus {
  color: #66a6ff;
  text-decoration: none;
  cursor: pointer;
}

.ingredient-thumbnail {
  float: left;
  max-width: 200px;
  margin: 0 1rem 1rem 0;
}

.ingredient-heading {
  color: #66a6ff;
  font-family: "Tangerine", cursive;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.ingredient-description {
  color: #60728a;
  font-size: 1rem;
  line-height: 1.7;
}
</style>