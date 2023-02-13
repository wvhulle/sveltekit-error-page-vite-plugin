import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
process.chdir(path.resolve("../subapp"))
export const kit = sveltekit()