import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000,
    },
    build: {
      outDir: 'build',
    },
  };
});
