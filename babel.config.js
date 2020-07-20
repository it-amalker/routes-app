module.exports = {
  presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],

  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    '@babel/proposal-object-rest-spread',
  ],
};
