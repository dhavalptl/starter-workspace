import baseJestConfig from '../jest.config.js'

export default {
    ...baseJestConfig,
    testEnvironment: "jsdom",
    rootDir: "./src"
}