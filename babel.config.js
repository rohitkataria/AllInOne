module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ["."],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg'
        ],
        alias: {
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@styles': './src/styles',
        },
      }
    ]
  ]
};
