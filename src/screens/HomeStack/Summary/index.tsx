import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NavScreens, RouteParamList } from '@/navigation'
import { Button, Col, Container, Gap, Icon, PageTitle, Row, ScrollContainer } from '@/components'
import { t } from '@/i18n'
import { RW } from '@/theme'

import Type from './type'
import Information from './information'
import Total from './total'
import Category from './catagory'
import Footer from './footer'
import Document from './document'
import Download from './download'
import Email from './email'
import Success from './success'

import mockData from './mockData.json'

import styles from './styles'

const Summary: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParamList>>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [download, setDownload] = useState<boolean>(false)
  const [email, setEmail] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  return (
    <ScrollContainer style={styles.scrollContainer}>
      <Row isFull style={styles.closePos}>
        <Icon
          name="closeIcon"
          size={RW(24)}
          onPress={() => navigation.navigate(NavScreens.home.home)}
        />
      </Row>

      <Gap gap={26} />
      <PageTitle
        title={t('summaryTitle')}
        titleAlign="center"
        subTitle={t('summarySubtitle')}
        subTitleAlign="center"
        mode="light"
      />

      <Gap gap={40} />
      <View style={styles.card}>
        <Col>
          <Type iconName="ringIcon" typeTitle={t('calls')} typeContent={mockData.typeContent} />
          <Gap gap={20} />
          <View style={styles.line} />
          <Gap gap={20} />
          <Information
            count={mockData.count}
            countDescription={mockData.countDescription}
            SMSSize={mockData.SMSSize}
            callsSize={mockData.callsSize}
            internetSize={mockData.informationInternetSize}
          />
          <Gap gap={20} />
          <View style={styles.line} />
          <Gap gap={20} />
          <Total
            count={mockData.count_1}
            countDescription={mockData.countDescription}
            content={mockData.totalContent}
          />
        </Col>
      </View>

      <Gap gap={20} />
      <View style={styles.card}>
        <Col>
          <Type iconName="messageIcon" typeTitle={t('SMS')} typeContent={mockData.typeContent} />
          <Gap gap={20} />
          <View style={styles.line} />
          <Gap gap={20} />
          <Information
            count={mockData.count_2}
            countDescription={mockData.countDescription}
            SMSSize={mockData.SMSSize}
            callsSize={mockData.callsSize}
            internetSize={mockData.informationInternetSize}
          />
          <Gap gap={20} />
          <View style={styles.line} />
          <Gap gap={20} />
          <Total
            count={mockData.count_3}
            countDescription={mockData.countDescription}
            content={mockData.totalContent}
          />
        </Col>
      </View>
      <Gap gap={20} />
      <Category />

      <Gap gap={40} />
      <View style={styles.dotLine} />

      <Gap gap={37} />
      <Footer />

      <Gap gap={62} />
      <Button
        variant="primary"
        size="lg"
        text={t('saveDocuments')}
        onPress={() => setShowModal(true)}
      />
      <Gap gap={200} />
      {showModal && (
        <Document showModal={(val) => setShowModal(val)} onDownload={(val) => setDownload(val)} />
      )}
      {download && (
        <Download onDownload={(val) => setDownload(val)} onEmail={(val) => setEmail(val)} />
      )}
      {email && (
        <Email
          onDownload={(val) => setDownload(val)}
          onEmail={(val) => setEmail(val)}
          onSuccess={(val) => setSuccess(val)}
        />
      )}
      {success && <Success onEmail={(val) => setEmail(val)} onSuccess={(val) => setSuccess(val)} />}
    </ScrollContainer>
    // </Container>
  )
}

export default Summary
