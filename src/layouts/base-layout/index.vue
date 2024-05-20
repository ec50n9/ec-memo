<script lang="ts" setup>
import {
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  X as CloseIcon,
  Pin as PinIcon,
  PinnedOff as PinOffIcon,
} from "@vicons/tabler";

/** 固定在屏幕顶部 */
const alwaysOnTop = ref(false);
/** 是否启用最小化模式 */
const enableMiniMode = ref(false);

const windowsActions = computed(() => [
  {
    icon: alwaysOnTop.value ? PinOffIcon : PinIcon,
    handler: () => {
      alwaysOnTop.value = !alwaysOnTop.value;
    },
  },
  {
    icon: enableMiniMode.value ? MaximizeIcon : MinimizeIcon,
    handler: () => {
      enableMiniMode.value = !enableMiniMode.value;
    },
  },
  {
    icon: CloseIcon,
    handler: () => {},
  },
]);
</script>

<template>
  <n-layout class="h-screen" content-class="flex flex-col">
    <n-layout-header data-tauri-drag-region class="shrink-0" embedded>
      <n-space
        data-tauri-drag-region
        justify="end"
        align="center"
        class="px-2 py-1"
      >
        <n-button
          v-for="action in windowsActions"
          quaternary
          circle
          size="small"
          type="default"
          @click="action.handler"
        >
          <template #icon>
            <n-icon><component :is="action.icon" /></n-icon>
          </template>
        </n-button>
      </n-space>
    </n-layout-header>

    <n-layout-content embedded>
      <RouterView />
    </n-layout-content>
  </n-layout>
</template>
