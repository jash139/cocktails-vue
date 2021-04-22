<template>
  <div class="cocktails-div">
    <Subheading text="Drinks & Cocktails" />
    <div class="cocktails-menu">
      <div class="menu-item">
        <img
          class="cocktail-avatar"
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80"
          alt="cocktail"
        />
        <div class="about-cocktail">
          <h4>Cocktail 1</h4>
          <p>Alcoholic</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subheading from "./Subheading";

export default {
  name: "Cocktails",
  components: {
    Subheading,
  },
};
</script>

<style scoped>
.cocktails-div {
  background-color: rgba(255, 255, 255, 0.7);
}
.menu-item {
  display: flex;
  align-items: center;
}
.menu-item:hover {
  background-color: rgb(217, 237, 255);
  cursor: pointer;
}
.cocktail-avatar {
  border-radius: 10rem;
  height: 60px;
  margin: 0 1.5rem;
  width: 60px;
}
</style>