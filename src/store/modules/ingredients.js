import axios from "axios";

const state = {
    ingredient: {},
};

const getters = {
    ingredient: state => state.ingredient,
};

const actions = {
    async getIngredient({ commit }, name) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
        const ingredientDetails = {
            ...response.data.ingredients,
            thumbnail: "https://www.thecocktaildb.com/images/ingredients/" + name + ".png"
        };
        commit("setIngredient", ingredientDetails);
    }
};

const mutations = {
    setIngredient: (state, ingredient) => state.ingredient = ingredient
};

export default {
    state,
    getters,
    actions,
    mutations
}