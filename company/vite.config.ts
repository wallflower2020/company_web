import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/company_web',
  server: {
    open: true,
    host: '10.145.72.184'
  },

  plugins: [react()],
})
