import React from 'react'
import { Text, View } from 'react-native'

import NavHeader from '@/navigation/components/NavHeader'
import styles from './styles'

const HomeScreenA: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavHeader
        user={{
          url: 'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
          greetings: 'Hi Amanda!',
          content: 'Welcome Back',
        }}
        hasNotification={true}
        // hasBackButton={true}
      />
    </View>
  )
}

export default HomeScreenA
