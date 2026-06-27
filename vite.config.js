import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // ou @vitejs/plugin-react dependendo da sua versão

export default defineConfig({
  plugins: [react()],
  base: '/meu-portfolio/', 
})