<template>
  <div>
    <button @click="showSnackbar()">Show Snackbar</button>
    <div id="snackbar">Email copied!</div>
  </div>
</template>

<script>
export default {
  name: "EmailSnackbar",
  methods: {
    showSnackbar() {
      var snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
      }, 4000);
    },
  },
};
</script>

<style>
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