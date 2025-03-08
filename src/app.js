import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/profile/index',
      'pages/challenge/index',
      'pages/leaderboard/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '运动打卡',
      navigationBarTextStyle: 'black'
    }
  }

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
