const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
   mode = 'production';
}


module.exports = {
   mode: mode,
   entry: {
      main: path.resolve(__dirname, './src/pages/main/main.js'),
      loginPage: path.resolve(__dirname, './src/pages/loginPage/loginPage.js'),
      registrationPage: path.resolve(__dirname, './src/pages/registrationPage/registrationPage.js'),
      apartmentPage: path.resolve(__dirname, './src/pages/apartmentPage/apartmentPage.js'),
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: "assets/[name][ext][query]",
      clean: true,
   },
   devtool: 'source-map',
   devServer: {
      static: {
         directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
   },
   optimization: {
      splitChunks: {
         chunks: 'all'
      },
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
         template: "./src/pages/main/main.pug",
         filename: 'main.html',
         chunks: ['main']
      }),
      new HtmlWebpackPlugin({
         template: "./src/pages/loginPage/loginPage.pug",
         filename: 'loginPage.html',
         chunks: ['loginPage']
      }),
      new HtmlWebpackPlugin({
         template: "./src/pages/registrationPage/registrationPage.pug",
         filename: 'registrationPage.html',
         chunks: ['registrationPage']
      }),
      new HtmlWebpackPlugin({
         template: "./src/pages/apartmentPage/apartmentPage.pug",
         filename: 'apartmentPage.html',
         chunks: ['apartmentPage']
      })
   ],
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: "html-loader"
         },
         {
            test: /\.(sa|sc|c)ss$/,
            use: [
               (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
               "css-loader",
               {
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: [
                           [
                              "autoprefixer",
                              {
                                 //Options
                              }
                           ],
                           [
                              "postcss-preset-env",
                              {
                                 // Options
                              },
                           ],
                        ],
                     },
                  },
               },
               "sass-loader",
            ]
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.pug$/,
            loader: '@webdiscus/pug-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ]
   },
};