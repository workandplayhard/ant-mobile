import React, { useCallback, useRef, useState } from 'react'
import { Text, View } from 'react-native'
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
    // eslint-disable-next-line @typescript-eslint/no-shadow
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
    [onOpenModal, onPeriodStatus, periods],
  )

  return (
    <View>
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

      <Modal
        modalStyle={styles.modal}
        isVisible={modal}
        hasBackdrop={true}
        backdropColor={MODAL_BACKDROP_COLOR}
        swipeEnabled={true}
      >
        <Col style={[styles.wrapper]}>
          <View style={styles.handle} />
          <Gap gap={20} />
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
    </View>
  )
}

export default Period
