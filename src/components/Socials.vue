<template>
  <div class="socials">
    <div class="social-button" @click="openTab(contactLinks.linkedin)">
      <LinkedinSocial />
    </div>
    <div class="social-button" @click="openTab(contactLinks.github)">
      <GithubSocial />
    </div>
    <div class="social-button" @click="showSnackbar()">
      <EmailSocial />
    </div>
    <div id="snackbar">Email copied!</div>
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
    showSnackbar() {
      var snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
      }, 4000);
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

#snackbar {
  background-color: white;
  border-radius: 3px;
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.17);
  color: #66a6ff;
  font-size: 1rem;
  font-weight: 700;
  min-width: 250px;
  padding: 16px;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  text-align: center;
  visibility: hidden;
  z-index: 1;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 2rem;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 2rem;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 2rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 2rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>