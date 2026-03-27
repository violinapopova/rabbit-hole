import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: project sites live at https://<user>.github.io/<repo>/
// User/org pages (repo named *.github.io) are served from the site root.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  !repo ? '/' : repo.endsWith('.github.io') ? '/' : `/${repo}/`

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
