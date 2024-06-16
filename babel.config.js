module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'], // <- this is the same as the baseUrl
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@': './', // <- this is absolute (different from tsconfig)
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
