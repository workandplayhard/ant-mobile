import React, { useCallback, useState } from 'react'
import { StyleSheet, I18nManager, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Container, Gap, Icon, PageTitle, Row, Stepper, TextField } from '@/components'
import {
  LABEL_DARK_COLOR,
  PAGE_HORIZONTAL_PADDING,
  REDUCING_COST_FORWARD_COLOR,
  RW,
  WHITE,
  font,
} from '@/theme'
import { IStep } from '@/types'
import { useData } from '@/hooks'
import { t } from 'i18next'

import mockData from '../ReducingCost/mockData.json'

interface Props {
  children: React.ReactNode
}

const WrapperWithStepper: React.FC<Props> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const {
    cost,
    detail,
    success,
    tvOffer,
    tvPlan,
    tvSuccess,
    onCost,
    onDetail,
    onSuccess,
    onTVOffer,
    onTVPlan,
    onTVSuccess,
  } = useData()

  const [steps, setSteps] = useState<IStep<number>[]>(mockData.stepData)
  const onChangeStep = useCallback(
    (step: number) => {
      setCurrentStep(step)
      const _steps = [...steps]
      _steps[Math.max(0, step - 1)].isCompleted = true
      setSteps(_steps)
    },
    [steps],
  )

  const onBack = () => {
    if (detail) {
      onDetail(false)
      onCost(true)
    } else if (success) {
      onSuccess(false)
      onDetail(true)
    } else if (tvOffer) {
      onTVOffer(false)
      onSuccess(true)
    } else if (tvPlan) {
      onTVPlan(false)
      onTVOffer(true)
    } else {
      onTVSuccess(false)
      onTVPlan(true)
    }
  }

  // useEffect(() => {
  //   if (!detail) onChangeStep(1)
  // }, [detail, onChangeStep]) this stepper working but can't touch anything on my screen

  const getTitle = useCallback(() => {
    if (cost || tvOffer) return t('reducingCostTitle')
    else if (detail || success || tvPlan) return t('reducingPlanTitle')
    else return t('carInsurance')
  }, [cost, detail, success, tvOffer, tvPlan])

  return (
    <Container style={styles.container}>
      <Gap gap={76} />
      <Row style={[styles.headerRow, styles.row]}>
        <TouchableOpacity onPress={onBack} disabled={cost === true}>
          <View>
            <Row>
              <Icon name="reducingBackIcon" size={RW(20)} />
              <Gap horizontal={true} gap={7} />
              <TextField text="Back" style={styles.back} />
            </Row>
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity disabled={tvSuccess === true}>
            <Row>
              <TextField text="Forward" style={styles.forward} />
              <Gap horizontal={true} gap={7} />
              <Icon name="reducingForwardIcon" size={RW(20)} />
            </Row>
          </TouchableOpacity>
        </View>
      </Row>

      <Gap gap={30} />
      <View style={styles.row}>
        <PageTitle title={getTitle()} titleAlign="left" mode="light" />
      </View>

      <Gap gap={40} />
      <View style={styles.row}>
        <Stepper canJumpNext steps={steps} currentStep={currentStep} onChangeStep={onChangeStep} />
      </View>

      <Gap gap={60} />
      {children}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  headerRow: {
    justifyContent: 'space-between',
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
    width: RW(350),
    height: RW(140),
    zIndex: 2,
  },
  back: {
    ...font('pp.semibold', 18, LABEL_DARK_COLOR, 22),
  },
  forward: {
    ...font('pp.semibold', 18, REDUCING_COST_FORWARD_COLOR, 22),
  },
  row: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
})

export default WrapperWithStepper
