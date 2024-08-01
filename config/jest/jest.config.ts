
import type {Config} from 'jest';
import path from 'path';

const config: Config = {

  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
   ],
   moduleDirectories: [
       "node_modules",
       "src"
     ],
   moduleFileExtensions: [
     "js",
     "mjs",
     "cjs",
     "jsx",
     "ts",
     "tsx",
     "json",
     "node"
   ],

   rootDir: '../../',
   setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
   testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
   ],
   moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    "entities/(.*)": "<rootDir>src/entities/$1",
  },

  globals: {
    __IS_DEV__: true,
  },
};

export default config;
