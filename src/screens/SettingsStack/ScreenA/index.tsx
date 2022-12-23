import { Text, View } from 'react-native'
import React, { useCallback, useRef, useState, ElementRef } from 'react'

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
  TextField,
  TextInput,
  Slider,
  OTPField,
  Signature,
  Stepper,
  PageTitle,
  CircularProgress,
} from '@/components'
import { RW, RH, font } from '@/theme'

import styles from './styles'
import { IOption, IStep } from '@/types'

const HomeScreenA: React.FC = () => {
  const signatureRef = useRef<ElementRef<typeof Signature>>(null)
  const [showModal, setShowModal] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [sign, setSign] = useState<string | undefined>()
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

  const [currentStep, setCurrentStep] = useState<number>(0)
  const [steps, setSteps] = useState<IStep<number>[]>([
    {
      label: 'lorem ipsum',
      value: 1,
      isCompleted: false,
    },
    {
      label: 'lorem ipsum',
      value: 2,
      isCompleted: false,
    },
    {
      label: 'lorem ipsum',
      value: 3,
      isCompleted: false,
    },
    {
      label: 'lorem ipsum',
      value: 4,
      isCompleted: false,
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

  const onChangeStep = useCallback(
    (step: number) => {
      setCurrentStep(step)
      const _steps = [...steps]
      _steps[Math.max(0, step - 1)].isCompleted = true
      setSteps(_steps)
    },
    [steps],
  )

  return (
    <View style={styles.container}>
      <ScrollContainer>
        <PageTitle
          title="Before we start process"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          titleAlign="center"
          subTitleAlign="center"
          mode="dark"
        />
        <Col>
          <TextField style={styles.title} text={`StackB-ScreenA-${t('lorem')}`} />
          <TextField style={styles.title} text={`StackB-ScreenA-${t('lorem')}`} />
          <TextField style={styles.title} text={`StackB-ScreenA-${t('lorem')}`} />
          <Gap horizontal={false} gap={20} />
          <TextField
            style={styles.title}
            text={`Signature string: ${sign || ''}`}
            numberOfLines={3}
          />

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
          <Gap gap={20} />
          <Row>
            <CircularProgress
              maxValue={1000}
              value={208}
              valueStr={t('currency', { value: 208 })}
            />
            <Gap horizontal gap={50} />
            <CircularProgress
              isCurrent
              maxValue={1000}
              value={878}
              valueStr={t('currency', { value: 878 })}
            />
          </Row>
          <Gap horizontal={false} gap={20} />
          <TextInput value={text} placeholder="Your name" onChange={setText} />
          <Gap horizontal={false} gap={20} />
          <Button variant="default" size="xs" text="Open" onPress={() => openModal(1)} />
          <Gap horizontal={false} gap={20} />
          <Slider
            width={329}
            height={194}
            urls={[
              'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
              'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
              'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
            ]}
          />
        </Col>
        <Gap horizontal={false} gap={20} />

        <Slider
          width={329}
          urls={[
            'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
            'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
            'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
          ]}
        />

        <Stepper canJumpNext steps={steps} currentStep={currentStep} onChangeStep={onChangeStep} />
        <Gap horizontal={false} gap={20} />
      </ScrollContainer>
      {showModal === 1 && (
        <Modal
          isVisible
          hasBackdrop
          onClose={closeModal}
          swipeEnabled={false}
          backdropColor="rgba(0,0,0,0.5)"
        >
          <View
            style={{
              width: RW(329),
              minHeight: RW(433),
              backgroundColor: 'white',
              borderRadius: RW(20),
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: RH(30),
            }}
          >
            <OTPField cellCount={6} value={code} setValue={setCode} />
            <Signature ref={signatureRef} onSignComplete={(d: string) => setSign(d)} />
            <Button variant="primary" size="xs" text="Close" onPress={closeModal} />
          </View>
        </Modal>
      )}
      <Gap horizontal={false} gap={20} />

      <Slider
        width={329}
        urls={[
          'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
          'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
          'https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png',
        ]}
      />

      <Stepper canJumpNext steps={steps} currentStep={currentStep} onChangeStep={onChangeStep} />
      <Gap horizontal={false} gap={20} />
      <PageTitle
        title="Before we start process"
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        titleAlign="center"
        subTitleAlign="center"
        mode="dark"
      />
    </View>
  )
}

export default HomeScreenA
