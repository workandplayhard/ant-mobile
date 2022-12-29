import React from 'react'
import { View } from 'react-native'

import { Gap, TextField } from '@/components'
import { t } from '@/i18n'
import { useData } from '@/hooks'

import AverageReducing from './averageReducing'
import AveragePlan from './averagePlan'
import TVOffer from './tvoffer'

import styles from './styles'

const Average = () => {
  const { cost, detail, tvOffer, tvPlan } = useData()

  return (
    <View>
      <TextField
        text={tvPlan ? t('currentTVPlan') : t('averageTelephoneUse')}
        style={styles.averageTitle}
      />

      <Gap gap={30} />
      {cost && <AverageReducing />}
      {detail && <AveragePlan />}
      {tvOffer && <TVOffer />}
      {tvPlan && <AveragePlan />}
    </View>
  )
}

export default Average
