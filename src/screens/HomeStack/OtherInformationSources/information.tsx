import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { CheckBox, Gap, Icon, Row, TextField } from '@/components'

import { CustomTooltip } from '@/components/Tooltip'
import { t } from '@/i18n'
import { IFinance } from '@/types'

import mockData from './mockData'

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
    <View>
      <View style={styles.subSource}>
        <Row>
          <TextField text={t('typesOfInformation')} style={styles.subSourceText} />
          <CustomTooltip>
            <Icon
              name="questionCircleIcon"
              wrapperStyle={styles.subSourceIconPos}
              iconStyle={styles.subSourceIcon}
            />
          </CustomTooltip>
        </Row>
      </View>

      <Gap gap={48} />
      <View style={styles.paddingHorizontalStandard}>
        {financial.map((item, index) => (
          <Row
            key={index}
            style={[item.label !== t('accountBalance') && styles.financialGap, styles.financialRow]}
          >
            <TextField text={item.label} style={styles.subSourceInformationText} />
            <CheckBox
              onChange={(isChecked: boolean) => onSelectFinancial(index, isChecked)}
              isChecked={item.isSelected}
            />
          </Row>
        ))}
      </View>
    </View>
  )
}

export default Information
