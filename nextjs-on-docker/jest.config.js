const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });
const costomJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_mudules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
};
module.exports = createJestConfig(costomJestConfig);
