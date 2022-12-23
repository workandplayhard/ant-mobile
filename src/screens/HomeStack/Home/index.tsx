import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import NavHeader from '@/navigation/components/NavHeader'
import {
  Button,
  CircularProgress,
  Gap,
  Row,
  ScrollContainer,
  Slider,
  TextField,
} from '@/components'
import { NavScreens, RouteParamList } from '@/navigation'
import { RW, WHITE, font } from '@/theme'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()

  return (
    <ScrollContainer style={styles.container}>
      <NavHeader
        user={{
          url: mockData.exampleAvatarURL,
          greetings: t('homeGreetings', { name: 'Amanda' }),
          content: t('homeGreetingsContent'),
        }}
        hasNotification={true}
      />

      <Gap horizontal={false} gap={64} />
      <View style={{ width: '100%', height: RW(230) }}>
        <Slider width={RW(329)} height={RW(194)} urls={mockData.exampleImgURL} />
      </View>

      <Gap horizontal={false} gap={18} />
      <Row style={styles.buttonRow}>
        <View style={styles.cardNumber}>
          <Button
            variant="default"
            text={t('copyCardNumber')}
            iconName="copyCardNumberIcon"
            textStyle={styles.cardNumberText}
            buttonStyle={styles.buttonHeight}
          />
        </View>

        <View style={styles.showCVV}>
          <Button
            variant="default"
            text={t('showCVV')}
            iconName="showCVVIcon"
            textStyle={styles.showCVVText}
            buttonStyle={styles.buttonHeight}
          />
        </View>
      </Row>

      <Gap horizontal={false} gap={40} />
      <TextField text={t('moneySpent')} style={styles.moneySpentText} />

      <Gap horizontal={false} gap={30} />
      <Row style={styles.progressRow}>
        <CircularProgress
          maxValue={1000}
          value={208}
          valueStr={t('currency', { value: 208 })}
          label={t('lastMonth')}
        />

        <Gap horizontal gap={47} />
        <CircularProgress
          isCurrent
          maxValue={1000}
          value={878}
          valueStr={t('currency', { value: 878 })}
          label={t('thisMonth')}
        />
      </Row>

      <Gap horizontal={false} gap={37} />
      <Button
        variant="primary"
        size="lg"
        text="Optimize your payments"
        textStyle={{ ...font('pp.regular', 18, WHITE, 30) }}
        onPress={() => navigation.navigate(NavScreens.home.paymentOptimization)}
      />

      <Gap horizontal={false} gap={200} />
    </ScrollContainer>
  )
}

export default Home
