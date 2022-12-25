import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'

import Card from './card'

import { CheckBox, Dropdown, Gap, ImageView, Row } from '@/components'

import { t } from '@/i18n'

import mockData from './mockData'

import { IOption } from '@/types'

import styles from './styles'

const Bank = () => {
  const [countries, setCountries] = useState<IOption<string>[]>(mockData.data.countries)
  const current = countries.filter((country) => country.isSelected === true)

  console.log('current: ', current)
  const onSelectCountry = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...countries]
      _c[index].isSelected = isSelected
      setCountries(_c)
    },
    [countries],
  )

  return (
    <>
      <Gap gap={40} />
      <View style={styles.subSource}>
        <Text style={styles.subSourceText}>{t('chooseBanksAndCards')}</Text>
      </View>

      <Gap gap={40} />
      <View style={styles.paddingHorizontalStandard}>
        <Dropdown<string>
          data={countries}
          placeholder={t('placeholder')}
          buttonText={countries
            .filter((item) => item.isSelected)
            .map((item) => item.label)
            .join(', ')}
          onChange={(item, index) => onSelectCountry(index, !item.isSelected)}
          dropDownStyle={styles.dropdownPos}
        >
          {(item, index) => (
            <Row style={styles.financialRow}>
              <ImageView url={item.image} style={styles.image} />
              <Text style={styles.dropdownText}>{item.label}</Text>
              <CheckBox
                onChange={(isChecked: boolean) => onSelectCountry(index, isChecked)}
                isChecked={countries[index].isSelected}
              />
            </Row>
          )}
        </Dropdown>
      </View>
      {current.length !== 0 && <Card />}
    </>
  )
}

export default Bank
