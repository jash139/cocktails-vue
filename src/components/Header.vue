<template>
  <header class="header">
    <LogoIllustration />
    <SearchBar />
    <Socials />
  </header>
</template>

<script>
import LogoIllustration from "./LogoIllustration";
import SearchBar from "./SearchBar";
import Socials from "./Socials";

export default {
  name: "Header",
  components: {
    LogoIllustration,
    SearchBar,
    Socials,
  },
};
</script>

<style scoped>
</style>