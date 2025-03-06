import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'], // Garde cette config pour inclure les assets PNG

  // Ajoute cette configuration pour éviter la 404 sur le F5
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist', // Assure-toi que le dossier de build est correct
  },
});
