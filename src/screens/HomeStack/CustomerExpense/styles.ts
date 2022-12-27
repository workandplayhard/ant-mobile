import { StyleSheet } from 'react-native'

import {
  RH,
  RW,
  font,
  WHITE,
  BLACK,
  PRIMARY_BG_COLOR,
  PAGE_HORIZONTAL_PADDING,
  TEXT_INPUT_DARK_BG_COLOR,
} from '@/theme'
import { SCREEN_WIDTH } from '@/constants'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    flexDirection: 'column',
    alignITems: 'center',
    justifycontent: 'center',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingTop: RH(64),
  },
  contentContainer: {
    width: '100%',
    padding: RW(30),
  },
  pos: {
    alignItems: 'center',
  },
  percentage: {
    ...font('pp.bold', 26, WHITE, 32),
    textAlign: 'center',
    padding: RH(3),
  },
  percentageSymbol: {
    ...font('pp.bold', 14, WHITE, 26),
  },
  modalizeWrapper: {
    paddingHorizontal: RW(25),
  },
  modal: {
    paddingHorizontal: RW(30),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(40),
    flex: 1,
    borderRadius: RW(20),
    backgroundColor: WHITE,
  },
  modalTitle: {
    ...font('rw.bold', 20, WHITE, 28),
  },
  modalContent: {
    ...font('rw.thin', 16, BLACK, 26),
  },
  scrollContainerInitial: {
    maxHeight: RH(160),
  },
  closePos: {
    justifyContent: 'flex-end',
  },
  questionCirclePos: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: RW(22),
  },
  description: {
    backgroundColor: TEXT_INPUT_DARK_BG_COLOR,
    padding: RW(30),
    borderRadius: RW(20),
  },
  descriptionTitle: {
    ...font('rw.bold', 18, WHITE, 26),
    textAlign: 'center',
  },
  descriptionNumber: {
    ...font('pp.bold', 28, WHITE, 26),
    paddingTop: RH(10),
    textAlign: 'center',
  },
  cardContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: SCREEN_WIDTH / 2 - 40,
    height: SCREEN_WIDTH / 2 - 40,
    borderRadius: RW(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    ...font('rw.semibold', 20, WHITE, 26),
  },
  cardCheckboxPos: {
    position: 'absolute',
    right: RW(10),
    top: RW(10),
  },
  buttonContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  modalContainer: {
    width: '100%',
    paddingHorizontal: RW(30),
  },
})
