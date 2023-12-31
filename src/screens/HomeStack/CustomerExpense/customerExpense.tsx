import React, { useState, useCallback, useEffect, useRef, ElementRef } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
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
import { CARD_CHECKBOX_BAN_COLOR, ROW_DARK_BG_COLOR, RW } from '@/theme'
import { Tooltip } from '@/components/Tooltip'
import { useCustomerExpense } from '@/hooks/useCustomerExpense'

import mockData from './mockData'

import styles from './styles'

const cardInformation = [
  { label: 'customerEnergy', iconName: 'energyIcon', isSelected: false, color: '#FF2D39' },
  {
    label: 'customerTelephone',
    iconName: 'telephoneIcon',
    isSelected: false,
    color: '#FFBD6E',
  },
  {
    label: 'customerInsurance',
    iconName: 'handsHoldingCircleIcon',
    isSelected: false,
    color: '#FFBD6E',
  },
  { label: 'customerTV', iconName: 'tvIcon', isSelected: false, color: '#FFBD6E' },
  {
    label: 'customerCarInsurance',
    iconName: 'carIcon',
    isSelected: false,
    color: '#008037',
  },
  { label: 'customerMusic', iconName: 'musicIcon', isSelected: false, color: '#008037' },
]

export const CustomerExpense: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [cards, setCards] = useState<ICard[]>(cardInformation as unknown as ICard[])
  const [showModal, setShowModal] = useState<boolean>(false)
  const { enable, onEnable } = useCustomerExpense()
  const scrollRef = useRef<ElementRef<typeof ScrollContainer>>(null)

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
            <TextField text={t('dummyText')} style={styles.descriptionTitle} />
            <Gap gap={15} />
            <TextField text={mockData.descriptionNumberExample} style={styles.descriptionNumber} />
          </View>
        </View>

        <Gap gap={60} />
        <View style={styles.cardContainer}>
          {cards.map((card, index) => (
            <TouchableOpacity key={index} onPress={() => onCardSelect(index, !card.isSelected)}>
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
                <TextField text={t(card.label)} style={styles.cardText} />
                {!(enable && card.color === CARD_CHECKBOX_BAN_COLOR) && (
                  <View style={styles.cardCheckboxWrapper}>
                    <View style={styles.cardCheckboxPos}>
                      <CheckBox
                        onChange={(isChecked: boolean) => onCardSelect(index, isChecked)}
                        isChecked={cards[index].isSelected}
                      />
                    </View>
                  </View>
                )}
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
