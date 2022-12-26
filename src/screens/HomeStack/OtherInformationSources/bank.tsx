import React, { useCallback, useState, useMemo } from 'react'
import { Text, View } from 'react-native'

import Card from './card'

import { CheckBox, Dropdown, Gap, ImageView, Row } from '@/components'

import { t } from '@/i18n'

import { IOption } from '@/types'

import mockData from './mockData'

import styles from './styles'

interface IProps {
  onBankStatus: (count: number) => void
  onCardStatus: (count: number) => void
}

const Bank: React.FC<IProps> = ({ onBankStatus, onCardStatus }) => {
  const [banks, setBanks] = useState<IOption<string>[]>(mockData.data.banks)
  const current = useMemo(() => banks.filter((bank) => bank.isSelected === true), [banks])

  const onSelectBank = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...banks]
      _c[index].isSelected = isSelected
      setBanks(_c)
      onBankStatus(isSelected ? current.length + 1 : current.length - 1)
    },
    [banks, current, onBankStatus],
  )

  return (
    <View>
      <Gap gap={40} />
      <View style={styles.subSource}>
        <Text style={styles.subSourceText}>{t('chooseBanksAndCards')}</Text>
      </View>

      <Gap gap={40} />
      <View style={styles.paddingHorizontalStandard}>
        <Dropdown<string>
          data={banks}
          placeholder={t('placeholder')}
          buttonText={banks
            .filter((item) => item.isSelected)
            .map((item) => item.label)
            .join(', ')}
          onChange={(item, index) => onSelectBank(index, !item.isSelected)}
          dropDownStyle={styles.dropdownPos}
        >
          {(item, index) => (
            <Row style={styles.financialRow} key={index}>
              <ImageView url={item.image} style={styles.image} />
              <Text style={styles.dropdownText}>{item.label}</Text>
              <CheckBox
                onChange={(isChecked: boolean) => onSelectBank(index, isChecked)}
                isChecked={banks[index].isSelected}
              />
            </Row>
          )}
        </Dropdown>
      </View>
      {current.length !== 0 && <Card onCardStatus={onCardStatus} />}
    </View>
  )
}

export default Bank
