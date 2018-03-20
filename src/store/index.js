import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageSize: 10,
    categoryId: null,
    articleSearch: null
  },
  mutations: {
    updateCategoryId: (state, id) => {
      state.categoryId = id;
    },
    updateArticleSearch: (state, value) => {
      state.articleSearch = value;
    }
  }
});

export default store;