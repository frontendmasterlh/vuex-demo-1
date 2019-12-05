<template>
  <div id="app">
    <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync"
    ])
    // increment() {
    //   // 通知vuex去增加 触发store中对应的action
    //   this.$store.dispatch("increment");
    // },
    // decrement() {
    //   // 通知vuex去增加 触发store中对应的action
    //   this.$store.dispatch("decrement");
    // },
    // incrementIfOdd() {
    //   // 通知vuex去增加 触发store中对应的action
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // }
  },
  computed: {
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd;
    // }
    // mapState 返回对象 {count(){}}
    ...mapState(["count"]),
    ...mapGetters(["evenOrOdd"])
    // count(){
    //   return this.$store.state.count
    // }
  }
};
</script>

<style>
</style>
