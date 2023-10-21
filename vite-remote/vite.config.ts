import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: "remote_app",
        filename: "remoteEntry.js",
        exposes: {
          './button' : './src/button'
        },
        shared: ["react", "react-dom"]
      })
  ],
    build: {
      target: "esnext", //browsers can handle the latest ES features
    }
})
