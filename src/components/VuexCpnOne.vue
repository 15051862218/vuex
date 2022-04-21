<template>
  <div>
    <!-- <div>计数值: {{ counter }}</div> -->
    <!-- 1.counter值不同步 -->
    <!-- <button @click="counter++">+1</button>
    <button @click="counter--">-1</button> -->

    <!-- 2.使用vuex的全局状态数据，实现两个组件的counter同步 -->
    <!-- <div>计数值: {{ $store.state.counter }}</div>
    <button @click="$store.state.counter++">+1</button>
    <button @click="$store.state.counter--">-1</button> -->

    <!-- 3.mutations的基本使用 -->
    <!-- <div>计数值: {{ $store.state.counter }}</div>
    <button @click="$store.commit('add', 5)">+5</button>
    <button @click="$store.commit('sub', 5)">-5</button> -->

    <!-- 多个参数 -->
    <!-- <div>计数值: {{ $store.state.counter }}</div>
    <button @click="$store.commit('add', { num: 5, multiple: 2 })">+5</button>
    <button @click="$store.commit('sub', { num: 5, multiple: 2 })">-5</button> -->

    <!-- 使用常量引用mutations函数 -->
    <div>计数值: {{ $store.state.counter }}</div>
    <button @click="addCounter">+5</button>
    <button @click="subCounter">-5</button>
  </div>
</template>

<script>
import { COUNTER_ADD, COUNTER_SUB } from "../store/mutation-types";

export default {
  name: "VuexCpnOne",
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    addCounter() {
      this.$store.commit(COUNTER_ADD, { num: 5, multiple: 3 });
    },
    subCounter() {
      this.$store.commit(COUNTER_SUB, { num: 5, multiple: 3 });
    },
  },
};
</script>
