import React, { useCallback, useRef, useState } from 'react'
import { View } from 'react-native'
import { Modalize } from 'react-native-modalize'

import {
  Button,
  Col,
  Dropdown,
  Gap,
  Icon,
  Modal,
  Row,
  ScrollContainer,
  TextField,
  Tooltip,
} from '@/components'
import { MODAL_BACKDROP_COLOR } from '@/theme'

import { t } from '@/i18n'

import { IOption } from '@/types'

import mockData from './mockData'

import styles from './styles'

interface IProps {
  onPeriodStatus: (count: number) => void
}

const Period: React.FC<IProps> = ({ onPeriodStatus }) => {
  const [periods, setPeriods] = useState<IOption<string>[]>(mockData.data.periods)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const modalizeRef = useRef<Modalize>(null)

  const onOpenModal = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  const onCancelModal = useCallback(() => {
    setShowModal(false)
    modalizeRef.current?.close()
  }, [modalizeRef])

  const onNext = useCallback(() => {
    let _c = [...periods]
    _c = _c.map((item) => {
      item.isSelected = false
      return item
    })

    _c[index].isSelected = true
    setPeriods(_c)
    onCancelModal()
  }, [index, periods, onCancelModal])

  const onSelectPeriod = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (index: number, isSelected: boolean) => {
      let _c = [...periods]
      const current = periods.filter((item) => item.isSelected === true)

      if (current.length === 0) {
        _c[index].isSelected = isSelected
        onPeriodStatus(1)
        setPeriods(_c)
      } else {
        const trueElement = periods.filter((item) => item.isSelected === true)
        if (trueElement[0].label !== _c[index].label && _c[index].label === 'One time only') {
          setIndex(index)
          setShowModal(true)
          onOpenModal()
        } else {
          _c = _c.map((item) => {
            item.isSelected = false
            return item
          })

          _c[index].isSelected = isSelected
          setPeriods(_c)
        }
      }
    },
    [onOpenModal, onPeriodStatus, periods],
  )

  return (
    <View>
      <View style={styles.subSource}>
        <Row>
          <TextField text={t('chooseThePeriod')} style={styles.subSourceText} />
          <Tooltip text={t('lorem')} mode="light">
            <Icon
              name="questionCircleIcon"
              wrapperStyle={styles.subSourceIconPos}
              iconStyle={styles.subSourceIcon}
            />
          </Tooltip>
        </Row>
      </View>

      <Gap gap={40} />
      <View style={styles.paddingHorizontalStandard}>
        <Dropdown<string>
          data={periods}
          iconSelect="default"
          placeholder={t('placeholder')}
          buttonStyle={styles.subSourcePeriodDropBorder}
          onChange={(item, idx) => onSelectPeriod(idx, !item.isSelected)}
          buttonText={periods
            .filter((item) => item.isSelected)
            .map((item) => item.label)
            .join(', ')}
          dropDownStyle={styles.dropdownPos}
        >
          {(item) => <TextField text={item.label} style={styles.subSourcePeriodText} />}
        </Dropdown>
        <Gap gap={40} />
      </View>

      {showModal && (
        <Modal
          modalStyle={styles.modal}
          isVisible
          hasBackdrop={true}
          backdropColor={MODAL_BACKDROP_COLOR}
          swipeEnabled={true}
        >
          <Col style={[styles.wrapper]}>
            <View style={styles.handleWrapper}>
              <View style={styles.handle} />
            </View>
            <Gap gap={30} />
            <TextField text={periods[index].label} style={styles.modalTitle} />
            <Gap gap={20} />
            <ScrollContainer style={styles.scrollContainerInitial}>
              <TextField text={mockData.data.modalContentExample} style={styles.modalContent} />
            </ScrollContainer>

            <Gap gap={60} />
            <Button
              variant="default"
              size="lg"
              text={t('cancel')}
              onPress={onCancelModal}
              buttonStyle={{
                borderColor: '#7A7A7D',
              }}
            />

            <Gap gap={21} />
            <Button
              variant="primary"
              size="lg"
              text={mockData.data.informationModalButton}
              onPress={onNext}
            />
          </Col>
        </Modal>
      )}
    </View>
  )
}

export default Period
