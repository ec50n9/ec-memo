<script lang="ts" setup>
import { useAppStore } from "../../store/app";
import { Apple } from "@vicons/tabler"

const appStore = useAppStore();
</script>

<template>
  <div class="index">
    <h1 data-tauri-drag-region class="bg-blue-100">Welcome to EC Memo</h1>
    <p>clicked {{ appStore.count }} times.</p>
    <button @click="appStore.increment">Click me</button>
    <n-button @click="appStore.increment">
      <template #icon>
        <n-icon>
          <Apple />
        </n-icon>
      </template>
      Click me
      </n-button
    >
  </div>
</template>
