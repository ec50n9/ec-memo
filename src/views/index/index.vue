<script lang="ts" setup>
import { useContentStore } from "@/store/content";

const contentStore = useContentStore();

const inputValue = ref("");
const addContent = () => {
  contentStore.addContent(inputValue.value);
  inputValue.value = "";
};
</script>

<template>
  <div class="h-full flex flex-col gap-3 bg-gray-1">
    <div class="grow flex flex-col gap-3 p-3">
      <div
        v-for="item in contentStore.contentArr"
        class="p-3 bg-white shadow-sm rd-2 of-hidden"
      >
        {{ item.content }}
      </div>
    </div>

    <div class="shrink-0 flex gap-2 p-3 bg-white">
      <n-input
        v-model:value="inputValue"
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 5 }"
        size="small"
        placeholder="输入点什么"
      />
      <n-button size="small" @click="addContent">添加</n-button>
    </div>
  </div>
</template>
