import React from 'react'

import { StyleProp, View, ViewStyle } from 'react-native'

import { Col, Gap, Icon, ImageView, Row, TextField } from '@/components'
import { useReduceCost } from '@/hooks'

import IconNames from '@/components/Icon/icons'

import HotMobile from '@/assets/images/img_white_hot_mobile.png'
import YES from '@/assets/images/img_yes.png'

import styles from './styles'
import { RH, RW } from '@/theme'

interface IInformation {
  count: number
  countDescription: string
  SMSSize: number
  callsSize: number
  internetSize: string | number
  style?: StyleProp<ViewStyle>
  SMSIcon?: keyof typeof IconNames
  CallsIcon?: keyof typeof IconNames
  InternetIcon?: keyof typeof IconNames
}

interface IDetail {
  title: string
  size: string | number
  icon: keyof typeof IconNames
}

const Information: React.FC<IInformation> = ({
  count,
  countDescription,
  SMSSize,
  callsSize,
  internetSize,
  style,
  SMSIcon = 'whiteMessageIcon',
  CallsIcon = 'whiteRingIcon',
  InternetIcon = 'whiteLightIcon',
}) => {
  const { tvOffer, tvPlan, detail } = useReduceCost()
  const informationDetails = [
    { title: 'SMS', size: SMSSize, icon: SMSIcon },
    { title: 'Calls', size: callsSize, icon: CallsIcon },
    { title: 'Internet', size: internetSize, icon: InternetIcon },
  ]
  // eslint-disable-next-line react/no-unstable-nested-components
  const Detail: React.FC<IDetail> = ({ title, size, icon }) => (
    <View>
      <Col style={styles.informationPos}>
        {(detail || tvPlan) && (
          <View>
            <Icon name={icon} size={RW(20)} wrapperStyle={{ paddingBottom: RH(0) }} />

            {/* <Gap gap={0} /> */}
          </View>
        )}
        <TextField text={title} style={styles.informationContentTitle} />
        <TextField text={size} style={styles.informationContentDescription} />
      </Col>
      <Gap horizontal gap={10} />
    </View>
  )
  return (
    <Row style={[styles.informationRow, style]}>
      <Col>
        <TextField text={count} style={styles.informationTitle} />
        <TextField text={countDescription} style={styles.informationContent} />
      </Col>
      {informationDetails.map((info, index) => (
        <Detail key={index} title={info.title} size={info.size} icon={info.icon} />
      ))}
      <View style={[(tvOffer || tvPlan) && styles.yesPos]}>
        <ImageView url={tvOffer || tvPlan ? YES : HotMobile} />
      </View>
    </Row>
  )
}

export default Information
