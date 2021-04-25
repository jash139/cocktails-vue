import Vuex from "vuex";
import Vue from "vue";

import cocktails from "./modules/cocktails";
import ingredients from "./modules/ingredients";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cocktails,
        ingredients
    }
});