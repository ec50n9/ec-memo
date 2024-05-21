<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { getCurrent } from "@tauri-apps/api/window";
import {
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  X as CloseIcon,
  Pin as PinIcon,
  PinnedOff as PinOffIcon,
} from "@vicons/tabler";

const appStore = useAppStore();

const windowsActions = computed(() => [
  {
    icon: appStore.alwaysOnTop ? PinOffIcon : PinIcon,
    handler: appStore.toggleAlwaysOnTop,
  },
  {
    icon: appStore.enableMiniMode ? MaximizeIcon : MinimizeIcon,
    handler: appStore.toggleEnableMiniMode,
  },
  {
    icon: CloseIcon,
    handler: async () => {
      await getCurrent().close();
    },
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
