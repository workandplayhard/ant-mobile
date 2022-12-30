import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { IAverage } from '@/types'
import { Button, Gap, ScrollContainer } from '@/components'
import { t } from '@/i18n'
import { useData } from '@/hooks'

import Information from './information'

import mockData from './mockData.json'

import styles from './styles'

const TVOffer: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [data, setData] = useState<IAverage[]>(mockData.information as unknown as IAverage[])
  const { onTVPlan, onTVOffer } = useData()

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
          size="lg"
          text={t('valueForMoney')}
          wrapperStyle={styles.valueButton}
        />
        <Gap horizontal gap={15} />
        <Button variant="pure" size="lg" text="Cheapest" wrapperStyle={styles.customButton} />
        <Gap horizontal gap={15} />
        <Button variant="pure" size="lg" text="Reactive" wrapperStyle={styles.customButton} />
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
              style={[information.isSelected && styles.cardBorder]}
            />
          </TouchableOpacity>
          <Gap gap={20} />
        </View>
      ))}

      <Gap gap={60} />
      <Button
        variant="primary"
        size="lg"
        text={t('next')}
        disabled={selected === false}
        onPress={() => {
          onTVOffer(false)
          onTVPlan(true)
          formatInformation()
        }}
      />
    </View>
  )
}

export default TVOffer
