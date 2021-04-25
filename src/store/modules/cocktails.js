import axios from "axios";

const state = {
    cocktails: []
};

const getters = {
    allCocktails: state => state.cocktails
};

const actions = {
    async searchByName({ commit }, name) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        commit("setCocktails", response.data.drinks);
    }
};

const mutations = {
    setCocktails: (state, cocktails) => state.cocktails = cocktails
};

export default {
    state,
    getters,
    actions,
    mutations
};