import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    esbuild({
      minify: !isDev,
      target: 'es2020',
      define: {
        __DEV__: isDev,
        // __VERSION__: '"x.y.z"',
      },
      tsconfig: 'tsconfig.json', // default
    }),
    postcss({
      plugins: []
    })
  ]
};