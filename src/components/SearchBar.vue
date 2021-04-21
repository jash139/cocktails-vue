<template>
  <form @submit="onSubmit" class="search-bar">
    <input
      class="search-field"
      type="text"
      v-model="searchQuery"
      name="searchQuery"
      placeholder="Search cocktails"
    />
    <button type="submit" class="search-btn">
      <i class="fas fa-search search-icon" />
      Search
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.searchQuery) {
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  background-color: white;
  border-radius: 10rem;
  display: flex;
  max-width: 25rem;
}
.search-field {
  border: none;
  border-radius: 10rem;
  color: #66a6ff;
  font-size: 1.2rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  width: 100%;
}
::placeholder {
  color: #cce2ff;
}
:-ms-input-placeholder {
  color: #cce2ff;
}
::-ms-input-placeholder {
  color: #cce2ff;
}
.search-btn {
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  border-width: 0;
  border-radius: 10rem;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 400;
  justify-content: space-around;
  outline-width: 0;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
}
.search-btn:hover {
  cursor: pointer;
  transform: scale(1.08);
}
.search-icon {
  margin-right: 1rem;
}
</style>