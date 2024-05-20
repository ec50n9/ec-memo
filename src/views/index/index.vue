<script lang="ts" setup>
import { useAppStore } from "../../store/app";
import { Apple } from "@vicons/tabler";

const appStore = useAppStore();
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="grow shadow-sm bg-white rd-2 of-hidden">
      <p>clicked {{ appStore.count }} times.</p>
      <button @click="appStore.increment">Click me</button>
      <n-button @click="appStore.increment">
        <template #icon>
          <n-icon>
            <Apple />
          </n-icon>
        </template>
        Click me
      </n-button>
    </div>

    <div>
      hello
    </div>
  </div>
</template>
