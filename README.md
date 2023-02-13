Demonstrates a bug in the error handler of @sveltejs/kit inside the development mode of vite. 

To see the error, execute `npx run dev` or `pnpm exec vite dev`. The internal error that you can see in the browser should not be displayed. Instead the user provided error should be shown. 

The bug disappears when sveltekit() is called inside the root directory. Looking into the source code sveltekit depends on the cwd. However, changing the cwd before calling sveltekit() does change the error. Instead of showing the error in the browser using the fallback error page, the browser displays "internal error" and the terminal window show that the server outputs "undefined" when the error is thrown.

This bug means that I have to duplicate my vite config across different subprojects in a monorepo because the sveltekit() function does not follow cwd (when it comes to errors). It seems like other things, apart from the sveltekit error, run.