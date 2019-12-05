import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 状态对象
const state = {
  count: 0
};
// 包含多个对应事件回调函数的对象
const actions = {
  // 增加的action
  increment({ commit }) {
    commit("INCREMENT");
  },
  decrement({ commit }) {
    commit("DECREMENT");
  },
  // 带条件的action
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 1) commit("INCREMENT");
  },
  // 异步action
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 1000);
  }
};
// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT(state) {
    state.count++;
  },
  //减少的mutation
  DECREMENT(state) {
    state.count--;
  }
};
// 包含多个getters技术属性的对象
const getters = {
  evenOrOdd(state) {
    // 不需要调用，读取属性值时被调用
    return state.count % 2 === 0 ? "偶数" : "奇数";
  }
};
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
