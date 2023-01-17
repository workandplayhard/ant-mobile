import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { CheckBox, Dropdown, Gap, ImageView, Row, TextField } from '@/components'

import { t } from '@/i18n'

import { IOption } from '@/types'

import MizrahiTefahotBank from '@/assets/images/img_mizrahi_tefahot_bank.png'
import MachineLearning from '@/assets/images/img_machine_learning_islael.png'
import BankHapoalim from '@/assets/images/img_bank_hapoalim.png'

import styles from './styles'

interface IProps {
  onCardStatus: (count: number) => void
}

const cardInformation = [
  {
    label: t('mizrahiTefahotBank'),
    value: 'us',
    isSelected: false,
    image: MizrahiTefahotBank,
  },
  {
    label: t('machineLearningIsrael'),
    value: 'cn',
    isSelected: false,
    image: MachineLearning,
  },
  {
    label: t('bankHapoalim'),
    value: 'cn',
    isSelected: false,
    image: BankHapoalim,
  },
]

const Card: React.FC<IProps> = ({ onCardStatus }) => {
  const [cards, setCards] = useState<IOption<string>[]>(cardInformation)
  const current = cards.filter((card) => card.isSelected === true)

  const onSelectCard = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...cards]
      _c[index].isSelected = isSelected
      setCards(_c)
      onCardStatus(isSelected ? current.length + 1 : current.length - 1)
    },
    [cards, current.length, onCardStatus],
  )

  return (
    <View>
      <View style={styles.paddingHorizontalStandard}>
        <Dropdown<string>
          data={cards}
          placeholder={t('selectCreditCards')}
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
              <TextField text={item.label} style={styles.dropdownText} />
              <CheckBox
                onChange={(isChecked: boolean) => onSelectCard(index, isChecked)}
                isChecked={cards[index].isSelected}
              />
            </Row>
          )}
        </Dropdown>

        <Gap gap={20} />
      </View>
    </View>
  )
}

export default Card
