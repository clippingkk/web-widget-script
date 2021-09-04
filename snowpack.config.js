// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const isProduction = process.env.NODE_ENV === 'production'

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: 'src',
  mount: {
    /* ... */
  },
  plugins: [
    "snowpack-plugin-stylus"
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 2345
  },
  buildOptions: {
    out: './dist'
    /* ... */
  },
  optimize: {
    bundle: isProduction,
    minify: isProduction,
    target: isProduction ? 'es2018' : 'es2020'
  }
};
