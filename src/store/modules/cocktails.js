import axios from "axios";

const state = {
    cocktails: [],
    activeCocktail: {},
};

const getters = {
    allCocktails: state => state.cocktails,
    activeCocktail: state => state.activeCocktail
};

const actions = {
    async searchByName({ commit }, name) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        commit("setCocktails", response.data.drinks);
    },
    async setActiveCocktail({ commit }, cocktail) {
        commit("setActiveCocktail", cocktail);
    }
};

const mutations = {
    setCocktails: (state, cocktails) => state.cocktails = cocktails,
    setActiveCocktail: (state, cocktail) => state.activeCocktail = cocktail

};

export default {
    state,
    getters,
    actions,
    mutations
};