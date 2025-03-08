const config = {
    projectName: 'sport-app',
    date: '2025-03-07',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
      '@tarojs/plugin-platform-weapp',
      '@tarojs/plugin-framework-react',
      '@tarojs/plugin-platform-h5' // 确保这里包含 H5 插件
    ],
    framework: 'react',
    compiler: 'webpack5',
    h5: {
      publicPath: '/',
      staticDirectory: 'static'
    }
  }
  
  module.exports = config;
  