<template>
  <div>
    <!-- <div>计数值: {{ counter }}</div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button> -->
    <!-- <div>计数值: {{ $store.state.counter }}</div>
    <button @click="$store.state.counter++">+1</button>
    <button @click="$store.state.counter--">-1</button> -->

    <!-- <div>计数值: {{ $store.state.counter }}</div>
    <button @click="$store.commit('add', 5)">+5</button>
    <button @click="$store.commit('sub', 5)">-5</button> -->

    <!-- <div>计数值: {{ $store.state.counter }}</div>
    <button @click="$store.commit('add', { num: 5, multiple: 2 })">+5</button>
    <button @click="$store.commit('sub', { num: 5, multiple: 2 })">-5</button> -->
    <div>计数值: {{ $store.state.counter }}</div>
    <button @click="addCounter">+5</button>
    <button @click="subCounter">-5</button>
  </div>
</template>

<script>
import { COUNTER_ADD, COUNTER_SUB } from "../store/mutation-types";

export default {
  name: "VuexCpnTwo",
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    addCounter() {
      this.$store.commit(COUNTER_ADD, { num: 5, multiple: 4 });
    },
    subCounter() {
      this.$store.commit(COUNTER_SUB, { num: 5, multiple: 4 });
    },
  },
};
</script>
