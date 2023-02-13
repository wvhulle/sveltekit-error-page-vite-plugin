import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kit } from "../lib/kit"
export default defineConfig({
	plugins: [kit],
	server: {
		fs: {
			allow: [".", ".."]
		},
		port: 3000
	}
});
