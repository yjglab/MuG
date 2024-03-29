// old code only
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    layout: ["./src/client/js/layout.js", "./src/client/scss/layout.scss"],
    intro: ["./src/client/js/intro.js", "./src/client/scss/screens/intro.scss"],
    main: ["./src/client/js/main.js", "./src/client/scss/screens/main.scss"],
    nav: ["./src/client/js/nav.js"],
    test: ["./src/client/js/test.js", "./src/client/scss/screens/test.scss"],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      // filename: "css/styles.css",
    }),
  ],

  watchOptions: {
    ignored: /node_modules/,
    // aggregateTimeout: 3000,
    // poll: 1000,
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ], // sass->css->style
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
