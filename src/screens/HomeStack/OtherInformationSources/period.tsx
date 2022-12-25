import React, { useCallback, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import { Button, Col, Dropdown, Gap, Icon, Row, ScrollContainer, TextField } from '@/components'

import { t } from '@/i18n'

import mockData from './mockData'
import { IOption } from '@/types'

import styles, { informationModalHeight } from './styles'
import { OTHER_INFORMATION_SUB_FOOTER_CANCEL_BORDER_COLOR, WHITE, font } from '@/theme'

interface IProps {
  onPeriodStatus: (count: number) => void
}

const Period: React.FC<IProps> = ({ onPeriodStatus }) => {
  const [periods, setPeriods] = useState<IOption<string>[]>(mockData.data.periods)
  const [modal, setModal] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const modalizeRef = useRef<Modalize>(null)

  const onOpenModal = useCallback(() => {
    modalizeRef.current?.open()
  }, [modalizeRef])

  const onCancelModal = useCallback(() => {
    setModal(false)
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
    (index: number, isSelected: boolean) => {
      const _c = [...periods]
      const current = periods.filter((item) => item.isSelected === true)

      if (current.length === 0) {
        _c[index].isSelected = isSelected
        onPeriodStatus(1)
        setPeriods(_c)
      } else {
        const trueElement = periods.filter((item) => item.isSelected === true)
        if (trueElement[0].label !== _c[index].label) {
          setIndex(index)
          setModal(true)
          onOpenModal()
        }
      }
    },
    [onOpenModal, periods],
  )

  return (
    <>
      <Gap gap={48} />
      <View style={styles.subSource}>
        <Row>
          <Text style={styles.subSourceText}>{t('chooseThePeriod')}</Text>
          <Icon
            name="questionCircleIcon"
            wrapperStyle={styles.subSourceIconPos}
            iconStyle={styles.subSourceIcon}
          />
        </Row>
      </View>

      <Gap gap={40} />
      <View style={styles.paddingHorizontalStandard}>
        <Dropdown<string>
          data={periods}
          iconSelect="default"
          placeholder={t('placeholder')}
          buttonStyle={styles.subSourcePeriodDropBorder}
          onChange={(item, index) => onSelectPeriod(index, !item.isSelected)}
          buttonText={periods
            .filter((item) => item.isSelected)
            .map((item) => item.label)
            .join(', ')}
          dropDownStyle={styles.dropdownPos}
        >
          {(item) => <Text style={styles.subSourcePeriodText}>{item.label}</Text>}
        </Dropdown>
        <Gap gap={40} />
      </View>

      <Portal>
        <Modalize
          ref={modalizeRef}
          withHandle
          handlePosition="inside"
          modalStyle={styles.modal}
          handleStyle={[styles.handle]}
          closeOnOverlayTap={false}
          childrenStyle={styles.modalChildren}
          modalHeight={informationModalHeight}
        >
          <Col style={[styles.wrapper]}>
            <Gap gap={20} />

            <Gap gap={20} />
            <TextField text={periods[index].label} style={styles.modalTitle} />
            <Gap gap={20} />
            <ScrollContainer style={styles.scrollContainerInitial}>
              <TextField text={mockData.data.modalContentExample} style={styles.modalContent} />
            </ScrollContainer>

            <Gap gap={60} />
            <Button
              variant="pure"
              borderColor={OTHER_INFORMATION_SUB_FOOTER_CANCEL_BORDER_COLOR}
              size="lg"
              text={t('cancel')}
              onPress={onCancelModal}
            />

            <Gap gap={21} />
            <Button
              variant="primary"
              size="lg"
              text={mockData.data.informationModalButton}
              onPress={onNext}
            />
          </Col>
        </Modalize>
      </Portal>
    </>
  )
}

export default Period
