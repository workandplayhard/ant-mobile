import React from 'react'

import { StyleProp, View, ViewStyle } from 'react-native'

import { Col, ImageView, Row, TextField } from '@/components'
import { useData } from '@/hooks'

import styles from './styles'

import HotMobile from '@/assets/images/img_white_hot_mobile.png'
import YES from '@/assets/images/img_yes.png'

interface IInformation {
  count: number
  countDescription: string
  SMSSize: number
  callsSize: number
  internetSize: string | number
  style?: StyleProp<ViewStyle>
}

interface IDetail {
  title: string
  size: string | number
}

const Information: React.FC<IInformation> = ({
  count,
  countDescription,
  SMSSize,
  callsSize,
  internetSize,
  style,
}) => {
  const { tvOffer, tvPlan } = useData()
  const informationDetails = [
    { title: 'SMS', size: SMSSize },
    { title: 'Calls', size: callsSize },
    { title: 'Internet', size: internetSize },
  ]
  // eslint-disable-next-line react/no-unstable-nested-components
  const Detail: React.FC<IDetail> = ({ title, size }) => (
    <Col style={styles.informationPos}>
      <TextField text={title} style={styles.informationContentTitle} />
      <TextField text={size} style={styles.informationContentDescription} />
    </Col>
  )
  return (
    <Row style={[styles.informationRow, style]}>
      <Col>
        <TextField text={count} style={styles.informationTitle} />
        <TextField text={countDescription} style={styles.informationContent} />
      </Col>
      <View>
        <Row>
          {informationDetails.map((info, index) => (
            <Detail key={index} title={info.title} size={info.size} />
          ))}
        </Row>
      </View>
      <View>
        <ImageView url={tvOffer || tvPlan ? YES : HotMobile} />
      </View>
    </Row>
  )
}

export default Information
