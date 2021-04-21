<template>
  <header class="header">
    <LogoIllustration />
    <SearchBar />
  </header>
</template>

<script>
import LogoIllustration from "./LogoIllustration";
import SearchBar from "./SearchBar";

export default {
  name: "Header",
  components: {
    LogoIllustration,
    SearchBar,
  },
};
</script>

<style scoped>
</style>