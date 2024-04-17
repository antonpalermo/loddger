// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@packages/config-tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  presets: [sharedConfig]
};

export default config;
