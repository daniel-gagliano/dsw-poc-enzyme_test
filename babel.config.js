module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // para Jest
    '@babel/preset-react'
  ],
};
