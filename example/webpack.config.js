const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  const webConfig = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
  };

  config.module.rules = [...config.module.rules, webConfig];

  // ensure that the example app don't have conflicting 
  // react packages with the library
  const alias = {
    react: path.join(__dirname, '../node_modules/react'),
    'react-dom': path.join(__dirname, '../node_modules/react-dom'),
    'react-native': path.join(__dirname, '../node_modules/react-native'),
    'react-native-web': path.join(
      __dirname,
      '../node_modules/react-native-web'
    ),
  }

  config.resolve.alias = alias

  return config;
};
