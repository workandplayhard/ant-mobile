import React, { useState } from 'react'
import { View } from 'react-native'

import { Button, CheckBox, Gap, Icon, Row, TextField } from '@/components'
import { t } from '@/i18n'
import { RW } from '@/theme'
import { useData } from '@/hooks'

import Information from './information'

import mockData from './mockData.json'

import styles from './styles'

const AveragePlan = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const { detail, onDetail, onSuccess, tvOffer, onTVPlan, onTVSuccess } = useData()

  return (
    <View>
      <View>
        <Information
          count={mockData.costInformation.count}
          countDescription={mockData.costInformation.countDescription}
          SMSSize={mockData.costInformation.SMSSize}
          callsSize={mockData.costInformation.callsSize}
          internetSize={mockData.costInformation.informationInternetSize}
          style={(detail || onTVPlan) && styles.cardHeight}
        />

        <Gap gap={40} />
        <TextField
          text={tvOffer ? t('tvPlanClosed') : t('averageTelephoneUse')}
          style={styles.averageTitle}
        />

        <Gap gap={30} />
        <Information
          count={mockData.costInformation.count}
          countDescription={mockData.costInformation.countDescription}
          SMSSize={mockData.costInformation.SMSSize}
          callsSize={mockData.costInformation.callsSize}
          internetSize={mockData.costInformation.informationInternetSize}
          style={(detail || onTVPlan) && styles.cardHeight}
        />

        <Gap gap={60} />
        <View>
          <Row>
            <Icon name="reducingCheckIcon" size={RW(22)} />
            <Gap horizontal gap={11} />
            <TextField text={mockData.planTitleExample} style={styles.averagePlanText} />
          </Row>

          <Gap gap={11} />
          <Row>
            <Icon name="reducingCheckIcon" size={RW(22)} />
            <Gap horizontal gap={11} />
            <TextField text={mockData.planTitleExample} style={styles.averagePlanText} />
          </Row>

          <Gap gap={11} />
          <Row>
            <Icon name="reducingCheckIcon" size={RW(22)} />
            <Gap horizontal gap={11} />
            <TextField text={mockData.planTitleExample} style={styles.averagePlanText} />
          </Row>
        </View>

        <Gap gap={40} />
        <TextField text={mockData.planSubTitleExample} style={styles.averagePlanSubTitle} />

        <Gap gap={30} />
        <Row>
          <CheckBox isChecked={checked} onChange={setChecked} />
          <Gap horizontal gap={11} />
          <TextField text={t('planCheckText')} style={styles.averagePlanCheckText} />
        </Row>

        <Gap gap={42} />
        <Button
          variant="primary"
          size="lg"
          text={t('next')}
          disabled={!checked}
          onPress={() => {
            if (detail) {
              onSuccess(true)
              onDetail(false)
            } else {
              onTVPlan(false)
              onTVSuccess(true)
            }
          }}
        />
      </View>
    </View>
  )
}

export default AveragePlan
