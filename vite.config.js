import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: [
    "**/*.glb",
    "**/*.gltf", // You might also want to include .gltf files
    // ... potentially other custom assets like .hdr, .mp3, etc.
  ],
});
