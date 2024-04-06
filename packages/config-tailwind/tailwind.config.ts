import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
/** @type { import('tailwindcss').Config } */
const config: Omit<Config, "content"> = {};

export default config;
