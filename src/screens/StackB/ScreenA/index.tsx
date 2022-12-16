import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'

import { t } from '@/i18n'

import Placeholder from '@/assets/images/placeholder.png'
import {
  Modal,
  ScrollContainer,
  Col,
  Gap,
  Row,
  Icon,
  CheckBox,
  Radio,
  DateTime,
  Button,
  Dropdown,
  ImageView,
  TextInput,
} from '@/components'
import { RW, RH, font } from '@/theme'

import styles from './styles'
import { IOption } from '@/types'

const HomeScreenA: React.FC = () => {
  const [showModal, setShowModal] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [countries, setCountries] = useState<IOption<string>[]>([
    {
      label: 'United States',
      value: 'us',
      isSelected: false,
      image: Placeholder,
    },
    {
      label: 'China',
      value: 'cn',
      isSelected: false,
      image: Placeholder,
    },
  ])

  const onSelectCountry = useCallback(
    (index: number, isSelected: boolean) => {
      const _c = [...countries]
      _c[index].isSelected = isSelected
      setCountries(_c)
    },
    [countries],
  )

  const openModal = useCallback((index: number) => {
    setShowModal(index)
  }, [])

  const closeModal = useCallback(() => {
    setShowModal(0)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollContainer>
        <Col>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Text style={styles.title}>{`StackB-ScreenA-${t('lorem')}`}</Text>
          <Gap horizontal={false} gap={20} />
          <Row>
            <Icon name="balloonHotIcon" />
            <Gap horizontal gap={20} />
            <Icon name="carIcon" />
          </Row>
          <Gap horizontal={false} gap={20} />
          <Row>
            <CheckBox isChecked={checked} onChange={setChecked} />
            <Gap horizontal gap={20} />
            <Radio isOn={checked} onChange={setChecked} />
          </Row>
          <DateTime value={new Date()} format="YYYY-MM-DD HH:mm:ss" style={{ color: '#ffffff' }} />
          <Gap horizontal={false} gap={20} />
          <Dropdown<string>
            data={countries}
            placeholder="Select"
            buttonText={countries
              .filter((item) => item.isSelected)
              .map((item) => item.label)
              .join(', ')}
            onChange={(item, index) => onSelectCountry(index, !item.isSelected)}
          >
            {(item, index) => (
              <Row style={{ justifyContent: 'space-between' }}>
                <ImageView url={item.image} style={{ width: RW(30), height: RW(30) }} />
                <Text style={{ ...font('rw.medium', 16, 'black', 24) }}>{item.label}</Text>
                <CheckBox
                  onChange={(isChecked: boolean) => onSelectCountry(index, isChecked)}
                  isChecked={countries[index].isSelected}
                />
              </Row>
            )}
          </Dropdown>
          <Gap horizontal={false} gap={20} />
          <TextInput value={text} placeholder="Your name" onChange={setText} />
          <Gap horizontal={false} gap={20} />
          <Button variant="default" size="xs" text="Open" onPress={() => openModal(1)} />
        </Col>
      </ScrollContainer>
      {showModal === 1 && (
        <Modal
          isVisible
          hasBackdrop
          onClose={closeModal}
          swipeEnabled
          backdropColor="rgba(0,0,0,0.5)"
        >
          <View
            style={{
              width: RW(329),
              height: RW(433),
              backgroundColor: 'white',
              borderRadius: RW(20),
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: RH(30),
            }}
          >
            <Button variant="primary" size="xs" text="Close" onPress={closeModal} />
          </View>
        </Modal>
      )}
    </View>
  )
}

export default HomeScreenA
