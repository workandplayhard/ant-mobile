import { StyleSheet, I18nManager } from 'react-native'

import {
  RW,
  STEP_INACTIVE_BG_COLOR,
  STEP_ACTIVE_BG_COLOR,
  STEP_SHADOW_COLOR,
  font,
  WHITE,
  TEXT_INPUT_FONT_COLOR,
  RH,
} from '@/theme'
import { SCREEN_WIDTH } from '@/constants'

const STEP_SIZE = RW(30)

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  stepContainer: {
    width: STEP_SIZE,
    height: '100%',
    flexDirection: 'column',
    zIndex: 1,
  },
  step: {
    width: STEP_SIZE,
    height: STEP_SIZE,
    borderRadius: STEP_SIZE,
    backgroundColor: STEP_INACTIVE_BG_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentStep: {
    backgroundColor: STEP_ACTIVE_BG_COLOR,
    elevation: 5,
    shadowColor: STEP_SHADOW_COLOR,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  completedStep: {
    backgroundColor: STEP_ACTIVE_BG_COLOR,
  },
  stepText: {
    ...font('rw.regular', 16, TEXT_INPUT_FONT_COLOR, 16),
  },
  currentStepText: {
    color: WHITE,
  },
  stepLabel: {
    ...font('rw.regular', 12, TEXT_INPUT_FONT_COLOR, 16),
    paddingHorizontal: RW(2),
    width: SCREEN_WIDTH,
  },
  stepLineContainer: {
    width: '100%',
    alignItems: 'center',
    height: RH(2),
    top: STEP_SIZE / 2 - RH(1),
    paddingHorizontal: STEP_SIZE / 2,
    position: 'absolute',
    zIndex: 0,
    ...(I18nManager.isRTL ? { right: -STEP_SIZE / 2 } : { left: -STEP_SIZE / 2 }),
  },
  inactiveLine: {
    width: '100%',
    height: '100%',
    backgroundColor: STEP_INACTIVE_BG_COLOR,
  },
  activeLine: {
    width: '100%',
    height: '100%',
    backgroundColor: STEP_ACTIVE_BG_COLOR,
  },
})
