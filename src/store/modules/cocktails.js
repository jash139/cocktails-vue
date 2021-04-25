import axios from "axios";

const state = {
    cocktails: [],
    activeCocktail: {},
    ingredients: [],
};

const getters = {
    allCocktails: state => state.cocktails,
    activeCocktail: state => state.activeCocktail,
    activeCocktailIngredients: state => state.ingredients
};

const actions = {
    async searchByName({ commit }, name) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        commit("setCocktails", response.data.drinks);
    },
    async setActiveCocktail({ commit }, cocktail) {
        commit("setActiveCocktail", cocktail);
        commit("setIngredients", cocktail);
    },
};

const mutations = {
    setCocktails: (state, cocktails) => state.cocktails = cocktails,
    setActiveCocktail: (state, cocktail) => state.activeCocktail = cocktail,
    setIngredients: (state, cocktail) => {
        let ingredients = [];
        let ingredientNumber = 1;
        const baseString = "strIngredient";
        let currIngredient = baseString + ingredientNumber.toString();
        while (cocktail[currIngredient] !== null) {
            ingredients.push(cocktail[currIngredient]);
            ingredientNumber++;
            currIngredient = baseString + ingredientNumber.toString();
        }
        state.ingredients = ingredients;
    }

};

export default {
    state,
    getters,
    actions,
    mutations
};