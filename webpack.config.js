const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    // Входной файл
    entry: {
      bundle: path.resolve(__dirname, 'src/index.js'),
    },
    // Выходной файл
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name][contenthash].js' : '[name].js',
      clean: isProduction,
      // assetModuleFilename: "[name][ext]",
      assetModuleFilename: '[name].[contenthash][ext][query]',
    },
    // Source maps для удобства отладки
    devtool: isProduction ? 'source-map' : undefined,
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        // {
        //   test: /\.html$/i,
        //   loader: 'html-loader',
        // },
        // Компилируем SCSS в CSS
        {
          // test: /\.scss$/i,
          test: /\.(c|sa|sc)ss$/i,
          // use: ["style-loader", "css-loader", "sass-loader"],
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
          generator: {
            filename: 'styles/[name].[contenthash][ext]',
          },
          // 4) style-loader - Inject styles into DOM, 3) css-loader - Turns css into commonjs, 2) postcss-loader - Adds browser prefixes for compatibility, 1) sass-loader - Turns sass into css
        },
        // Транспилируем js с babel
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name].[contenthash][ext][query]',
          },
        },
        // Подключаем шрифты из css
        {
          test: /\.(eot|ttf|woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'CPS 1.6',
        filename: 'index.html',
        template: 'src/template.html',
        minify: isProduction
          ? false
          : {
              collapseWhitespace: true,
              removeComments: true,
            },
        // minify: isProduction
        //   ? {
        //       collapseWhitespace: true,
        //       removeComments: true,
        //     }
        //   : false,
      }),
      // Кладем стили в отдельный файлик
      new MiniCssExtractPlugin({
        filename: isProduction ? 'styles/[name].[contenthash].css' : '[name].css',
      }),
      isProduction ? new BundleAnalyzerPlugin() : undefined,
    ].filter(Boolean),
  };
};
