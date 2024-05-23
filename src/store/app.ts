import envHelper from "@/utils/env-helper";
import { LogicalSize, getCurrent } from "@tauri-apps/api/window";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    alwaysOnTop: false,
    enableMiniMode: false,
  }),
  actions: {
    async toggleAlwaysOnTop() {
      const newValue = !this.alwaysOnTop;
      await getCurrent().setAlwaysOnTop(newValue);
      this.alwaysOnTop = newValue;
    },
    async toggleEnableMiniMode() {
      const newValue = !this.enableMiniMode;
      const normalSize = new LogicalSize(
        envHelper.winNormalizedWidth,
        envHelper.winNormalizedHeight
      );
      const miniSize = new LogicalSize(
        envHelper.winMinimizedWidth,
        envHelper.winMinimizedHeight
      );
      await getCurrent().setSize(newValue ? miniSize : normalSize);
      this.enableMiniMode = newValue;
    },
  },
});
