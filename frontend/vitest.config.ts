import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['html'],
			exclude: [...configDefaults.coverage.exclude, '**/graphql.tsx'],
		},
	},
	resolve: {
		alias: [{ find: 'src', replacement: '/src' }],
	},
});
