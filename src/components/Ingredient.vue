<template>
  <div class="ingredient" @click="toggleModalState">
    <h4 class="ingredient-name">{{ ingredient }}</h4>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Ingredient",
  props: {
    ingredient: String,
  },
  methods: {
    ...mapActions(["toggleModalState"]),
  },
};
</script>

<style scoped>
.ingredient {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.ingredient:hover {
  background-color: rgb(217, 237, 255);
  cursor: pointer;
}
.ingredient-name {
  color: #66a6ff;
  font-size: 1.2rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
}
</style>