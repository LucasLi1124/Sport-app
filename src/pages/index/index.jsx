import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const [stepCount, setStepCount] = useState(0)

  useEffect(() => {
    Taro.getWeRunData({
      success: res => {
        const encryptedData = res.encryptedData
        setStepCount(5000) // 假设解析后步数是 5000
      },
      fail: () => {
        console.log('获取步数失败')
      }
    })
  }, [])

  return (
    <View className='container'>
      <Text className='title'>今日步数</Text>
      <Text className='steps'>{stepCount}</Text>
      <Button onClick={() => Taro.navigateTo({ url: '/pages/challenge/index' })}>
        参与挑战赛
      </Button>
    </View>
  )
}
