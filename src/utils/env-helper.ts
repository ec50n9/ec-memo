import { toInt } from "radash";

const getViteEnv = (key: string) => {
  const value = import.meta.env[`VITE_${key}`];
  if (value === undefined) {
    throw new Error(`Vite environment variable ${key} is not defined`);
  }
  return value as string;
};

const getViteEnvInt = (key: string) => toInt(getViteEnv(key));

export default {
  baseURL: getViteEnv("BASE_URL"),
  winNormalizedWidth: getViteEnvInt("WIN_NORMALIZED_WIDTH"),
  winNormalizedHeight: getViteEnvInt("WIN_NORMALIZED_HEIGHT"),
  winMinimizedWidth: getViteEnvInt("WIN_MINIMIZED_WIDTH"),
  winMinimizedHeight: getViteEnvInt("WIN_MINIMIZED_HEIGHT"),
};
