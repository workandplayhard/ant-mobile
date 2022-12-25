import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'

import { CheckBox, Dropdown, Gap, ImageView, Row } from '@/components'

import { t } from '@/i18n'

import mockData from './mockData'
import { IOption } from '@/types'

import styles from './styles'

const Card = () => {
  const [cards, setCards] = useState<IOption<string>[]>(mockData.data.cards)

  const onSelectCard = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...cards]
      _c[index].isSelected = isSelected
      setCards(_c)
    },
    [cards],
  )

  return (
    <>
      <Gap gap={19} />
      <View style={styles.paddingHorizontalStandard}>
        <Dropdown<string>
          data={cards}
          placeholder={t('placeholder')}
          buttonText={cards
            .filter((item) => item.isSelected)
            .map((item) => item.label)
            .join(', ')}
          onChange={(item, index) => onSelectCard(index, !item.isSelected)}
          dropDownStyle={styles.dropdownPos}
        >
          {(item, index) => (
            <Row style={styles.financialRow}>
              <ImageView url={item.image} style={styles.image} />
              <Text style={styles.dropdownText}>{item.label}</Text>
              <CheckBox
                onChange={(isChecked: boolean) => onSelectCard(index, isChecked)}
                isChecked={cards[index].isSelected}
              />
            </Row>
          )}
        </Dropdown>

        <Gap gap={20} />
      </View>
    </>
  )
}

export default Card
