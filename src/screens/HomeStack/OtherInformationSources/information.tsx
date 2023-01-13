import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { CheckBox, Gap, Icon, Row, TextField, Tooltip } from '@/components'

import { t } from '@/i18n'
import { IFinance } from '@/types'
import { RW } from '@/theme'

import mockData from './mockData'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
              <TextField text={item.label} style={styles.subSourceInformationText} />
              <CheckBox
                onChange={(isChecked: boolean) => onSelectFinancial(index, !isChecked)}
                isChecked={item.isSelected}
              />
            </Row>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Information
