// 引入一个包
const path = require('path')
// 引入html插件
// const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // path: "/dist",
        // 打包后文件的文件
        filename: "bundle.js",
        // 告诉webpack不使用箭头
        environment:{
            arrowFunction: false,
            const:false
        }
    },
    // 指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [{
            // test指定的是规则生效的文件
            test: /\.ts$/,
            // 要使用的Loader
            use: [
                {
                   loader: 'babel-loader',
                   options:{
                    // 设置预定义的环境
                    presets:[
                        [
                            // 指定环境的插件
                            '@babel/preset-env',
                            // 配置信息
                            {
                                // 要兼容的目标浏览器
                                targets:{
                                    // "chrome":"88"
                                    "chrome":"109",
                                    "ie":"11"
                                },
                                "corejs":"3",
                                // 使用corejs的方式"usage" 表示按需加载
                                "useBuiltIns":"usage"
                            }
                        ]
                    ]
                    // presets: [
                    //     ['@babel/preset-env', { targets: "defaults" }]
                    //   ]
                   }
                },
                'ts-loader',
            ],
            // 要排除的文件
            exclude: /node-modules/
        },
        // 设置Less 文件的处理
        {
            test: /\.less$/,
            use:[
                "style-loader",
                "css-loader",
                // 引入postcss
                // {
                //    loader: "postcss-loader",
                //    options:{
                //     postcssOptions:{
                //         plugins:[
                //             "postcss-preset-env",
                //             {
                //                 browsers:'last 2 versions'
                //             }
                //         ]
                //     }
                //    }
                // },
                {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-preset-env",
                            {
                                browsers:'last 2 versions'
                            },
                          ],
                        ],
                      },
                    },
                  },
                "less-loader"
            ]
        }
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        // (alias) new HtmlWebpackPlugin(options?: HTMLWebpackPlugin.Options | undefined): HTMLWebpackPlugin
        new HTMLWebpackPlugin({
            // title:'这是一个自定义的title'
            template:"./src/index.html"
        }),
    ],
    // 用来设置引用模块
    resolve: {
        extensions:['.ts','.js']
    }
}