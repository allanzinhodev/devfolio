import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages não tem fallback de SPA: um acesso direto a /backlands cairia em 404.
// Copiamos index.html -> 404.html no build para que a rota limpa carregue o app.
function spaFallback() {
  let outDir = 'dist'
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    configResolved(cfg) {
      outDir = cfg.build.outDir
    },
    closeBundle() {
      const from = resolve(outDir, 'index.html')
      const to = resolve(outDir, '404.html')
      if (existsSync(from)) copyFileSync(from, to)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
