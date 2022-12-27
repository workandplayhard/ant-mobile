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
    paddingTop: RH(15),
    textAlign: 'center',
  },
  cardContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: RW(155),
    height: RW(155),
    borderRadius: RW(15),
    marginBottom: RW(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    ...font('rw.semibold', 20, WHITE, 26),
  },
  cardCheckboxPos: {
    right: RW(10),
  },
  cardCheckboxWrapper: {
    width: '100%',
    position: 'absolute',
    top: 0,
    paddingVertical: RW(10),
    PaddingHorizontal: RW(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  modalTitle: {
    textAlign: 'center',
    ...font('rw.bold', 26, BLACK, 32),
    width: '100%',
  },
  modalSubTitle: {
    textAlign: 'center',
    ...font('rw.regular', 14, BLACK, 26),
    width: '100%',
  },
})
