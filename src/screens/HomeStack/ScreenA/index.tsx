import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import NavHeader from '@/navigation/components/NavHeader'
import { Button, Gap } from '@/components'
import { NavScreens, RouteParamList } from '@/navigation'
import { t } from '@/i18n'

import styles from './styles'

const HomeScreenA: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

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
      <Gap gap={100} />
      <Button
        variant="primary"
        size="xs"
        text={t('next')}
        onPress={() => navigation.navigate(NavScreens.home.paymentOptimization)}
      />
    </View>
  )
}

export default HomeScreenA
