import axios from "axios";

const state = {
    ingredient: {},
    ingredientModal: false
};

const getters = {
    ingredient: state => state.ingredient,
    modalState: state => state.ingredientModal,
};

const actions = {
    async getIngredient({ commit }, name) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
        const ingredientDetails = {
            ...response.data.ingredients,
            thumbnail: "https://www.thecocktaildb.com/images/ingredients/" + name + ".png"
        };
        commit("setIngredient", ingredientDetails);
    },
    toggleModalState({ commit }) {
        commit("changeModalState");
    }
};

const mutations = {
    setIngredient: (state, ingredient) => state.ingredient = ingredient,
    changeModalState: (state) => state.ingredientModal = !state.ingredientModal
};

export default {
    state,
    getters,
    actions,
    mutations
}