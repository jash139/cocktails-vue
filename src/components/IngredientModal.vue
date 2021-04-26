<template>
  <div id="ingredient-modal" :class="modalState ? 'modal-open' : 'modal-close'">
    <div class="modal-content">
      <i class="fas fa-times close" @click="toggleModalState" />
      <p>Some text in the Modal..</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "IngredientModal",
  methods: {
    ...mapActions(["toggleModalState"]),
  },
  computed: mapGetters(["modalState"]),
};
</script>

<style>
.modal-open {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-close {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 1.5rem;
  max-width: 600px;
  position: relative;
}

.close {
  color: #aaaaaa;
  top: 1.5rem;
  right: 1.5rem;
  position: absolute;
  font-size: 1.5rem;
}

.close:hover,
.close:focus {
  color: #66a6ff;
  text-decoration: none;
  cursor: pointer;
}
</style>