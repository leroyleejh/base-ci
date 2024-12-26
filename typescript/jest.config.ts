// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest'

// const esModules = ["nanoid"].join("|");

const jestConfig: JestConfigWithTsJest = {
    coverageProvider: 'v8',
    collectCoverageFrom: [
        './src/**/*.ts',
        '!./src/**/*.test.ts',  // exclude test files
        '!./src/**/*.e2e.ts',   // exclude e2e files
        '!./src/**/*.routes.ts', // exclude routes files
        '!./src/**/*.model.ts', // exclude model files
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'text', 'lcov'],
    preset: 'ts-jest', // or other ESM presets
    // moduleNameMapper: {
    //     '^(\\.{1,2}/.*)\\.js$': '$1',
    // },
    // moduleNameMapper: {
    //     // "^nanoid(/(.*)|$)": "nanoid$1",
    //     "nanoid": require.resolve('nanoid'),
    // },
    // moduleNameMapper: { "^nanoid$": "nanoid" },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
    ],
    testEnvironment: 'node',
    testTimeout: 15000,
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: [
        '**/*.test.ts',
    ],
    transform: {
        "^.+.tsx?$": ["ts-jest", {}],
    },
    // transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    // transformIgnorePatterns: [],
    resetMocks: true,
}

export default jestConfig
