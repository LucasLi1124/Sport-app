import Taro, { useState } from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import './challenge.scss'

export default function Challenge() {
  const [targetSteps, setTargetSteps] = useState(10000)

  return (
    <View className='container'>
      <Input
        type='number'
        value={targetSteps}
        onInput={e => setTargetSteps(e.detail.value)}
      />
      <Button onClick={() => Taro.navigateTo({ url: '/pages/leaderboard/index' })}>
        创建挑战
      </Button>
    </View>
  )
}
