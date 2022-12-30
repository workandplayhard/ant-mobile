import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Button, Gap, ScrollContainer } from '@/components'
import { t } from '@/i18n'
import { IAverage } from '@/types'
import { useData } from '@/hooks'

import Information from './information'

import mockData from './mockData.json'

import styles from './styles'

const AverageReducing = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [data, setData] = useState<IAverage[]>(mockData.information as unknown as IAverage[])
  const { detail, tvPlan, onCost, onDetail } = useData()

  const onChange = useCallback(
    (index: number) => {
      const _c = [...data]
      _c.map((information) => {
        information.isSelected = false
      })
      _c[index].isSelected = true
      setData(_c)
      setSelected(true)
    },
    [data],
  )

  const formatInformation = useCallback(() => {
    const _c = [...data]
    _c.map((information) => {
      information.isSelected = false
    })

    setData(_c)
  }, [data])

  return (
    <View>
      <ScrollContainer direction="horizontal" style={styles.averageRow}>
        <Button
          variant="primary"
          size="md"
          text={t('valueForMoney')}
          wrapperStyle={styles.valueButton}
          buttonStyle={styles.moneyButton}
        />
        <Gap horizontal gap={15} />
        <Button
          variant="pure"
          size="md"
          text={t('cheapest')}
          wrapperStyle={styles.customButton}
          iconStyle={styles.cheapButton}
        />
        <Gap horizontal gap={15} />
        <Button
          variant="pure"
          size="md"
          text={t('reactive')}
          wrapperStyle={styles.customButton}
          iconStyle={styles.cheapButton}
        />
      </ScrollContainer>

      <Gap gap={40} />

      {data.map((information, index) => (
        <View>
          <TouchableOpacity onPress={() => onChange(index)}>
            <Information
              key={index}
              count={information.count}
              countDescription={information.countDescription}
              SMSSize={information.SMSSize}
              callsSize={information.callsSize}
              internetSize={information.informationInternetSize}
              style={[
                information.isSelected && styles.cardBorder,
                (detail || tvPlan) && styles.cardHeight,
              ]}
            />
          </TouchableOpacity>
          <Gap gap={20} />
        </View>
      ))}

      <Gap gap={40} />
      <Button
        variant="primary"
        size="lg"
        text={t('next')}
        disabled={selected === false}
        onPress={() => {
          onCost(false)
          onDetail(true)
          formatInformation()
        }}
      />
    </View>
  )
}

export default AverageReducing
