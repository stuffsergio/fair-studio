import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' + HashRouter: funciona igual en GitHub Pages (/fair-studio/) y en el VPS (/)
export default defineConfig({ plugins: [react()], base: './' })
