import { defineConfig } from 'vite';

/*   *   *   *   *   *   *   *   *   *   */

export default defineConfig({

    // enable HMR on wsl
    server: {
        watch: {
            usePolling: true,
        }
    }
});