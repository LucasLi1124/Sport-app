import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './leaderboard.scss'

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    Taro.request({
      url: 'http://localhost:3000/leaderboard',
      success: res => setLeaderboard(res.data)
    })
  }, [])

  return (
    <View className='container'>
      {leaderboard.map((user, index) => (
        <View key={index} className='rank'>
          <Text>{index + 1}. {user.name} - {user.steps} 步</Text>
        </View>
      ))}
    </View>
  )
}
