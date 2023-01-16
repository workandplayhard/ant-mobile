import React, { useState, useCallback, useEffect, useRef, ElementRef } from 'react'
import { View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {
  Row,
  Gap,
  Icon,
  Button,
  CheckBox,
  Container,
  PageTitle,
  TextField,
  ScrollContainer,
} from '@/components'

import { t } from '@/i18n'
import { ICard } from '@/types'
import OTPVerification from './OTPVerification'
import { NavScreens, RouteParamList } from '@/navigation'
import { ROW_DARK_BG_COLOR, RW } from '@/theme'
import { Tooltip } from '@/components/Tooltip'
import { useCustomerExpense } from '@/hooks/useCustomerExpense'
import { useApp } from '@/hooks'

import mockData from './mockData.json'

import styles from './styles'

export const CustomerExpense: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [cards, setCards] = useState<ICard[]>(mockData.data.cards as unknown as ICard[])
  const [showModal, setShowModal] = useState<boolean>(false)
  const { enable, onEnable } = useCustomerExpense()
  const isFocused = useIsFocused()
  const { onChangeTheme } = useApp()
  const scrollRef = useRef<ElementRef<typeof ScrollContainer>>(null)

  useEffect(() => {
    if (!isFocused) {
      onChangeTheme({ statusBarStyle: 'dark-content' })
    }
  }, [onChangeTheme, isFocused, enable])

  const onStepChange = useCallback(() => {
    scrollRef.current?.scrollTo?.({ y: 0 })
  }, [])

  const onCardSelect = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...cards]
      _c[index].isSelected = isSelected
      setCards(_c)
    },
    [cards],
  )

  return (
    <Container style={styles.container}>
      <View style={styles.headerContainer}>
        <Row isFull style={styles.closePos}>
          <Icon
            name="closeIcon"
            size={24}
            onPress={() => navigation.navigate(NavScreens.home.home)}
          />
        </Row>
        <PageTitle title={t('constantExpense')} titleAlign="left" mode="dark" />
      </View>

      <ScrollContainer ref={scrollRef}>
        <View style={styles.questionCirclePos}>
          <Tooltip text={t('lorem')} mode="dark" offset={RW(5)}>
            <Icon name="questionCircleIcon" size={RW(24)} />
          </Tooltip>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.description}>
            <TextField text={mockData.descriptionHeaderExample} style={styles.descriptionTitle} />
            <Gap gap={15} />
            <TextField text={mockData.descriptionNumberExample} style={styles.descriptionNumber} />
          </View>
        </View>

        <Gap gap={60} />
        <View style={styles.cardContainer}>
          {cards.map((card, index) => (
            <TouchableOpacity onPress={() => onCardSelect(index, !card.isSelected)}>
              <View
                key={index}
                style={[
                  styles.card,
                  {
                    backgroundColor: enable ? card.color : ROW_DARK_BG_COLOR,
                  },
                ]}
              >
                <Icon name={card.iconName} size={RW(34)} />
                <Gap gap={20} />
                <TextField text={card.label} style={styles.cardText} />
                <View style={styles.cardCheckboxWrapper}>
                  <View style={styles.cardCheckboxPos}>
                    <CheckBox
                      onChange={(isChecked: boolean) => onCardSelect(index, isChecked)}
                      isChecked={cards[index].isSelected}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Gap gap={30} />
        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            size="lg"
            text={t('next')}
            onPress={() => {
              if (!enable) setShowModal(true)
              else navigation.navigate(NavScreens.home.reducingCost)
            }}
          />
        </View>
        <Gap gap={135} />
        {showModal && (
          <OTPVerification
            showModal={(val) => setShowModal(val)}
            onChangeScrollPos={() => onStepChange()}
          />
        )}
      </ScrollContainer>
    </Container>
  )
}

export default CustomerExpense
