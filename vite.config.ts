import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid' // or solid-start/vite
import devtools from 'solid-devtools/vite'

export default defineConfig({
  plugins: [
    devtools({
      // pass `true` or an object with options
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true,
      },
    }),
    solid(),
  ],
})
