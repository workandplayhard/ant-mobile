import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Button, Gap, ScrollContainer } from '@/components'
import { t } from '@/i18n'
import { IAverage } from '@/types'
import { useReduceCost } from '@/hooks'

import Information from './information'

import mockData from './mockData.json'

import styles from './styles'

const AverageReducing = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [data, setData] = useState<IAverage[]>(mockData.information as unknown as IAverage[])
  const { detail, tvPlan, onCost, onDetail } = useReduceCost()
  const [button, setButton] = useState<string>(t('valueForMoney'))

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

  const onPress = useCallback(() => {
    onCost(false)
    onDetail(true)
    formatInformation()
  }, [formatInformation, onCost, onDetail])

  return (
    <View>
      <ScrollContainer direction="horizontal" style={styles.averageRow}>
        <Button
          variant={button === t('valueForMoney') ? 'primary' : 'pure'}
          size="md"
          text={t('valueForMoney')}
          wrapperStyle={styles.valueButton}
          buttonStyle={styles.moneyButton}
          onPress={() => setButton(t('valueForMoney'))}
        />
        <Gap horizontal gap={15} />
        <Button
          variant={button === t('cheapest') ? 'primary' : 'pure'}
          size="md"
          text={t('cheapest')}
          wrapperStyle={styles.customButton}
          iconStyle={styles.cheapButton}
          onPress={() => setButton(t('cheapest'))}
        />
        <Gap horizontal gap={15} />
        <Button
          variant={button === t('reactive') ? 'primary' : 'pure'}
          size="md"
          text={t('reactive')}
          wrapperStyle={styles.customButton}
          iconStyle={styles.cheapButton}
          onPress={() => setButton(t('reactive'))}
        />
      </ScrollContainer>

      <Gap gap={40} />

      {data.map((information, index) => (
        <View key={index}>
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
        onPress={onPress}
      />
    </View>
  )
}

export default AverageReducing
