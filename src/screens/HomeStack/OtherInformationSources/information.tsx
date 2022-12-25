import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'

import { CheckBox, Gap, Icon, Row } from '@/components'

import { t } from '@/i18n'

import mockData from './mockData'
import { IFinance } from '@/types'

import styles from './styles'

const Information = () => {
  const [financial, setFinancial] = useState<IFinance[]>(mockData.data.financial)

  const onSelectFinancial = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...financial]
      _c[index].isSelected = isSelected
      setFinancial(_c)
    },
    [financial],
  )

  return (
    <>
      <Gap gap={40} />
      <View style={styles.subSource}>
        <Row>
          <Text style={styles.subSourceText}>{t('typesOfInformation')}</Text>
          <Icon
            name="questionCircleIcon"
            wrapperStyle={styles.subSourceIconPos}
            iconStyle={styles.subSourceIcon}
          />
        </Row>
      </View>

      <Gap gap={48} />
      <View style={styles.paddingHorizontalStandard}>
        {financial.map((item, index) => (
          <Row
            style={[item.label !== t('accountBalance') && styles.financialGap, styles.financialRow]}
          >
            <Text style={styles.subSourceInformationText}>{item.label}</Text>
            <CheckBox
              onChange={(isChecked: boolean) => onSelectFinancial(index, isChecked)}
              isChecked={item.isSelected}
            />
          </Row>
        ))}
      </View>
    </>
  )
}

export default Information
