import React, { ElementRef, useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, I18nManager, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {
  Container,
  Gap,
  Icon,
  PageTitle,
  Row,
  ScrollContainer,
  Stepper,
  TextField,
} from '@/components'
import {
  LABEL_DARK_COLOR,
  PAGE_HORIZONTAL_PADDING,
  REDUCING_COST_FORWARD_COLOR,
  RW,
  WHITE,
  font,
} from '@/theme'
import { IStep } from '@/types'
import { useReduceCost } from '@/hooks'
import { t } from '@/i18n'

import mockData from '../ReducingCost/mockData.json'

interface Props {
  children: React.ReactNode
}

const WrapperWithStepper: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<ElementRef<typeof ScrollContainer>>(null)
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
  } = useReduceCost()

  const [steps, setSteps] = useState<IStep<number>[]>(mockData.stepData)

  const onStepChange = useCallback(() => {
    scrollRef.current?.scrollTo?.({ y: 0 })
  }, [])

  const onChangeStep = useCallback(
    (step: number) => {
      setCurrentStep(step)
      const _steps = [...steps]
      _steps[Math.max(0, step - 1)].isCompleted = true
      onStepChange()
      setSteps(_steps)
    },
    [onStepChange, steps],
  )

  useEffect(() => {
    if (cost) onChangeStep(0)
    else if (detail) onChangeStep(1)
    else if (tvSuccess) onChangeStep(2)
  }, [cost, detail, tvSuccess])

  const onBack = useCallback(() => {
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
  }, [
    detail,
    onCost,
    onDetail,
    onSuccess,
    onTVOffer,
    onTVPlan,
    onTVSuccess,
    success,
    tvOffer,
    tvPlan,
  ])

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

      <ScrollContainer style={styles.scrollContainer} ref={scrollRef}>
        <View style={styles.row}>
          <PageTitle title={getTitle()} titleAlign="left" mode="light" />
        </View>

        <Gap gap={40} />
        <View style={styles.row}>
          <Stepper
            canJumpNext
            steps={steps}
            currentStep={currentStep}
            onChangeStep={onChangeStep}
          />
        </View>

        <Gap gap={60} />
        {children}
      </ScrollContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  scrollContainer: {
    height: '100%',
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
