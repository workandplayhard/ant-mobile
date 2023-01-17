import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Gap, Icon, Radio, Row, TextField, Tooltip } from '@/components'

import i18n, { t } from '@/i18n'
import { IFinance } from '@/types'
import { RW } from '@/theme'

import styles from './styles'

const financialInformation = [
  {
    label: 'accountBalance',
    isSelected: false,
    value: 'balance',
  },
  {
    label: 'accountTransactions',
    isSelected: false,
    value: 'transactions',
  },
]

const Information = () => {
  const [financial, setFinancial] = useState<IFinance[]>(financialInformation)
  const labels = t('financialInformation.label', { returnObjects: true })

  const onSelectFinancial = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...financial]
      _c[index].isSelected = isSelected
      setFinancial(_c)
    },
    [financial],
  )

  return (
    <View>
      <View style={styles.subSource}>
        <Row>
          <TextField text={t('typesOfInformation')} style={styles.subSourceText} />
          <View style={styles.subSourceIconPos}>
            <Tooltip text={t('lorem')} mode="light" offset={RW(5)} pointerType={'other'}>
              <Icon name="questionCircleIcon" iconStyle={styles.subSourceIcon} />
            </Tooltip>
          </View>
        </Row>
      </View>

      <Gap gap={48} />
      <View style={styles.paddingHorizontalStandard}>
        {financial.map((item, index) => (
          <TouchableOpacity onPress={() => onSelectFinancial(index, !item.isSelected)}>
            <Row
              key={index}
              style={[
                item.label !== t('accountBalance') && styles.financialGap,
                styles.financialRow,
              ]}
            >
              <TextField text={t(item.label)} style={styles.subSourceInformationText} />
              <Radio
                isOn={item.isSelected}
                onChange={(isChecked: boolean) => onSelectFinancial(index, !isChecked)}
              />
            </Row>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Information
