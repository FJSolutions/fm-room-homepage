import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [ preact() ],
  css: {
    // 1. Tell Vite to process all CSS with Lightning CSS instead of PostCSS
    transformer: 'lightningcss',

    // 2. Pass options directly to Lightning CSS compiler
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      // Set to true if you want inline source maps during development
      // sourceMap: true,
    }
  },
  build: {
    // 3. Instruct Vite to use Lightning CSS to minify the final output
    cssMinify: 'lightningcss'
  }
})
