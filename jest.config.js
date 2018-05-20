module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
    '\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
};
