<template>
  <form @submit="onSubmit" class="search-bar">
    <div class="form-control">
      <input
        class="input"
        type="text"
        v-model="searchQuery"
        name="searchQuery"
        placeholder="Search cocktails"
      />
    </div>
    <input type="submit" value="Search" class="search-btn" />
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
  display: flex;
}
.input {
  border-width: 0;
  outline-width: 0;
  padding: 1rem;
  font-size: 1rem;
}
.search-btn {
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  border: none;
  border-radius: 10rem;
}
</style>