import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Morse-Code-Translator/',
  plugins: [react()],
})
