import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RouteParamList } from '@/navigation'
import { Col, Icon, ImageView, Row, TextField } from '@/components'
import { RH, RW } from '@/theme'

import styles from './styles'

interface IUser {
  url?: string
  greetings?: string
  content?: string
}

interface INavHeader {
  user?: IUser
  hasBackButton?: boolean
  hasNotification?: boolean
  onBack?: () => void
}

export const NavHeader: React.FC<INavHeader> = ({
  user,
  hasBackButton,
  hasNotification,
  onBack,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const _onBack = useCallback(() => {
    if (onBack) {
      onBack()
    } else if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }, [navigation, onBack])

  return (
    <Row
      style={[
        styles.container,
        (user || hasBackButton) && hasNotification
          ? { justifyContent: 'space-between' }
          : hasNotification && !hasBackButton
          ? { justifyContent: 'flex-end' }
          : { justifyContent: 'flex-start' },
      ]}
    >
      {user?.url && (
        <View style={styles.profile}>
          <ImageView url={user.url} style={styles.image} />
          <Col style={styles.adjust}>
            {user.greetings && <TextField style={styles.greetings} text={user.greetings} />}
            {user.content && <TextField text={user.content} style={styles.content} />}
          </Col>
        </View>
      )}
      {!!hasBackButton && (
        <View style={styles.iconContainer}>
          <Icon name="arrowPrevIcon" size={RW(24)} onPress={_onBack} />
        </View>
      )}
      {!!hasNotification && <Icon name="notificationActive" size={RW(24)} />}
    </Row>
  )
}

export default NavHeader
