import { error } from "@sveltejs/kit"

export const load = async () => {
    throw error(500, "This error is not shown on the error fallback page if sveltekit() is called outside of a standard location. But the starts up normally if the error from @sveltejs/kit is not called")
}