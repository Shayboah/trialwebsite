import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/trialwebsite/', // Replace with your repo name
  plugins: [react()],
});
