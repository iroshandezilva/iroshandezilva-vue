<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button class="count-btn" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>A portfolio for Iroshan De Zilva</p>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
.count-btn {
  border: 1px solid #42b983;
  padding: 5px 8px;
  border-radius: 6px;
}
.count-btn:focus,
.count-btn:active {
  outline: unset;
}
</style>
