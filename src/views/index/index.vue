<script lang="ts" setup>
import { useAppStore } from "../../store/app";

const appStore = useAppStore();
</script>

<template>
  <div class="index">
    <h1 data-tauri-drag-region class="bg-blue-100">Welcome to EC Memo</h1>
    <p>clicked {{ appStore.count }} times.</p>
    <button @click="appStore.increment">Click me</button>
  </div>
</template>
