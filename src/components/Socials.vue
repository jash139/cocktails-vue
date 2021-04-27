<template>
  <div class="socials">
    <div class="social-button" @click="openTab(contactLinks.linkedin)">
      <LinkedinSocial />
    </div>
    <div class="social-button" @click="openTab(contactLinks.github)">
      <GithubSocial />
    </div>
    <div class="social-button" @click="handleClick(contactLinks.email)">
      <EmailSocial />
    </div>
  </div>
</template>

<script>
import LinkedinSocial from "./LinkedinSocial";
import GithubSocial from "./GithubSocial";
import EmailSocial from "./EmailSocial";

import contactLinks from "../constants/contactLinks";

export default {
  name: "Socials",
  data() {
    return {
      contactLinks,
    };
  },
  methods: {
    openTab(url) {
      window.open(url, "_blank");
    },
  },
  components: {
    LinkedinSocial,
    GithubSocial,
    EmailSocial,
  },
};
</script>

<style scoped>
.socials {
  display: flex;
  align-items: center;
}
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