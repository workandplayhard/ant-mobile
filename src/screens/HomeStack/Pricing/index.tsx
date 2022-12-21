import React from 'react'
import { Text, View } from 'react-native'

import { Button, CheckBox, Container, Gap, Row, ScrollContainer, TextField } from '@/components'

import HeaderImage from '@/assets/images/img_signup_header.svg'
import { RW } from '@/theme'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

const Pricing: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean>(false)

  return (
    <Container>
      <HeaderImage style={styles.headerImage} width={RW(350)} height={RW(140)} />
      <View style={styles.header}>
        <TextField text={t('homeTitle')} style={styles.homeTitle} />
        <Gap horizontal={false} gap={12} />
        <TextField text={mockData.homeSubTitle} style={styles.homeSubTitle} />

        <ScrollContainer>
          <View style={styles.plan}>
            <Row style={styles.planContent}>
              <CheckBox isChecked={checked} onChange={setChecked} />
              <Text style={styles.planText}>{mockData.textExample}</Text>
            </Row>
          </View>
          <View style={styles.plan}>
            <Row style={styles.planContent}>
              <CheckBox isChecked={checked} onChange={setChecked} />
              <Text style={styles.planText}>{mockData.textExample}</Text>
            </Row>
          </View>
          <View style={[styles.plan, styles.buttonPosition]}>
            <Row style={styles.planContent}>
              <CheckBox isChecked={checked} onChange={setChecked} />
              <Text style={styles.planText}>{mockData.textExample}</Text>
            </Row>
          </View>

          <Button
            variant="primary"
            disabled={checked ? false : true}
            text="Next"
            style={styles.buttonPosition}
          />
        </ScrollContainer>
      </View>
    </Container>
  )
}

export default Pricing
