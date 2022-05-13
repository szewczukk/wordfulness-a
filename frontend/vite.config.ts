import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3001,
		proxy: {
			'/graphql': {
				target: 'http://localhost:3000/graphql',
				secure: false,
				changeOrigin: true,
				ws: true,
			},
		},
	},
	resolve: {
		alias: [{ find: 'src', replacement: '/src' }],
	},
});
