const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = {
  // المدخل 
  entry: {
    app: './src/index.js'
  },
  // المخرج الذي يتم نقل كل شيء له ولكن بشكل مضغوط مثلا 
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '',
    filename: "main.js",
  },

  mode: "development",

  devServer: { //هنا يتم التعديل التلقائي وظهورها في المتصفح دون الحاجه الي اعادة تحديث المتصفح
    contentBase: path.join(__dirname, "/dist"),
    port: 1233,
    overlay: true,//for errors
    writeToDisk: true,
    // open: true, // حتى يتم الفتح التلقائي للصفحة دون نسخ رابط العنوان المعطى في التيرمنل

  },

  module: {
    rules: [

      { //حتى يقرأ تنسيقات ال tooltip و غيرها 
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }
      },


      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true, // يتم ضغط الملف هنا حتى تكون العمليه اسرع في تحميل الملف على الموقع 
            }
          }
        ]
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // ضرورة كتابة هاد اللودر بهذه الطريقه حتى يتم التحميل التلقائي عند التعديل 
            options: {
              publicPath: '../'
            },
          },
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(png|svg|jpe?g|gif|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]', // حتى يحفظ الصورة باسمها المخزن في ملف المشروع و ext هو امتداد الصورة 
              outputPath: "images",
            }
          }
        ]
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]', //ينتقل لملف ال dist بنفس الاسم المخزن فيه 
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },
 
   

    ]

  },





  plugins: [
    
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "tripOne.html",
      template: "./src/tripOne.html",
    }),

    new HtmlWebpackPlugin({
      filename: "tripTwo.html",
      template: "./src/tripTwo.html",
    }),

    new HtmlWebpackPlugin({
      filename: "sign.html",
      template: "./src/sign.html",
    }),

    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
    }),

 


    new MiniCssExtractPlugin({ filename: "css/style.css"}),

    new OptimizeCSSAssetsPlugin({}),
  ],

};