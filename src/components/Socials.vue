<template>
  <div class="socials">
    <div class="social-button">
      <LinkedinSocial />
    </div>
    <div class="social-button">
      <GithubSocial />
    </div>
    <div class="social-button">
      <EmailSocial />
    </div>
  </div>
</template>

<script>
import LinkedinSocial from "./LinkedinSocial";
import GithubSocial from "./GithubSocial";
import EmailSocial from "./EmailSocial";

export default {
  name: "Socials",
  components: {
    LinkedinSocial,
    GithubSocial,
    EmailSocial,
  },
};
</script>

<style scoped>
.social-button {
  border-radius: 10rem;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0.9rem;
  height: 50px;
  width: 50px;
}
.social-button:hover {
  background-color: #66a6ff1e;
}
</style>