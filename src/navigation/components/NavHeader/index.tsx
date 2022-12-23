import React from 'react'
import { View } from 'react-native'

import { Col, Icon, ImageView, Row, TextField } from '@/components'

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
      {!!hasBackButton && <Icon name="arrowPrevIcon" onPress={onBack} />}
      {!!hasNotification && <Icon name="notificationIcon" badgeColor="red" />}
    </Row>
  )
}

export default NavHeader
