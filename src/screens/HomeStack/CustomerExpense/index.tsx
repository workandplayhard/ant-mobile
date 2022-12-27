import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

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

import mockData from './mockData.json'

import styles from './styles'

export const CustomerExpense: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [cards, setCards] = useState<ICard[]>(mockData.data.cards as unknown as ICard[])
  const [showModal, setShowModal] = useState<boolean>(false)

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

      <ScrollContainer>
        <View style={styles.questionCirclePos}>
          <Icon name="questionCircleIcon" size={24} />
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
            <View
              key={index}
              style={[
                styles.card,
                {
                  backgroundColor: card.color,
                },
              ]}
            >
              <Icon name={card.iconName} size={34} />
              <Gap gap={20} />
              <TextField text={card.label} style={styles.cardText} />
              <View style={styles.cardCheckboxPosWrapper}>
                <View style={styles.cardCheckboxPos}>
                  <CheckBox
                    onChange={(isChecked: boolean) => onCardSelect(index, isChecked)}
                    isChecked={cards[index].isSelected}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        <Gap gap={60} />
        <View style={styles.buttonContainer}>
          <Button variant="primary" size="lg" text={t('next')} onPress={() => setShowModal(true)} />
        </View>
        <Gap gap={150} />
        {showModal && (
          <View style={styles.modalContainer}>
            <OTPVerification showModal={(val) => setShowModal(val)} />
          </View>
        )}
      </ScrollContainer>
    </Container>
  )
}

export default CustomerExpense
