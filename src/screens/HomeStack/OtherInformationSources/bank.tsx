import React, { useCallback, useState, useMemo } from 'react'
import { View } from 'react-native'

import Card from './card'

import { CheckBox, Dropdown, Gap, ImageView, Row, TextField } from '@/components'

import { t } from '@/i18n'

import { IOption } from '@/types'

import MizrahiTefahotBank from '@/assets/images/img_mizrahi_tefahot_bank.png'
import MachineLearning from '@/assets/images/img_machine_learning_islael.png'
import BankHapoalim from '@/assets/images/img_bank_hapoalim.png'

import styles from './styles'

interface IProps {
  onBankStatus: (count: number) => void
  onCardStatus: (count: number) => void
}

const banksInformation = [
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

const Bank: React.FC<IProps> = ({ onBankStatus, onCardStatus }) => {
  const [banks, setBanks] = useState<IOption<string>[]>(banksInformation)
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
      <View style={styles.subSource}>
        <TextField text={t('chooseBanksAndCards')} style={styles.subSourceText} />
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
              <TextField text={item.label} style={styles.dropdownText} />
              <CheckBox
                onChange={(isChecked: boolean) => onSelectBank(index, isChecked)}
                isChecked={banks[index].isSelected}
              />
            </Row>
          )}
        </Dropdown>
      </View>
      {current.length !== 0 && (
        <View>
          <Gap gap={19} />
          <Card onCardStatus={onCardStatus} />
        </View>
      )}
    </View>
  )
}

export default Bank
