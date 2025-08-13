module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // ruta a tu setupTests.js
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
