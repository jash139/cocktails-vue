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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}
</style>