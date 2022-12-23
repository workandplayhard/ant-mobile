import React from 'react'
import { StyleSheet, I18nManager } from 'react-native'

import { Container } from '@/components'
import { PRIMARY_BG_COLOR, RW } from '@/theme'

import HeaderImage from '@/assets/images/img_signup_header.svg'

interface Props {
  children: React.ReactNode
}

const WrapperWithBackground: React.FC<Props> = ({ children }) => {
  return (
    <Container style={styles.container}>
      <HeaderImage style={styles.headerImage} width={RW(350)} height={RW(140)} />
      {children}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
    width: RW(350),
    height: RW(140),
    zIndex: 2,
  },
})

export default WrapperWithBackground
