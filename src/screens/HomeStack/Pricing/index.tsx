import React from 'react'
import { View } from 'react-native'

import {
  Button,
  CheckBox,
  Container,
  Gap,
  PageTitle,
  Row,
  ScrollContainer,
  TextField,
} from '@/components'

import HeaderImage from '@/assets/images/img_signup_header.svg'
import { RW } from '@/theme'
import { t } from '@/i18n'

import mockData from './mockData.json'

import styles from './styles'

const Pricing: React.FC = () => {
  const [selected, setSelected] = React.useState<number | null>(null)

  return (
    <Container>
      <HeaderImage style={styles.headerImage} width={RW(350)} height={RW(140)} />
      <View style={styles.container}>
        <Gap horizontal={false} gap={130} />
        <PageTitle
          title={t('homeTitle')}
          titleAlign="center"
          subTitle={mockData.homeSubTitle}
          subTitleAlign="center"
          mode="dark"
        />
        <Gap horizontal={false} gap={40} />

        <ScrollContainer>
          {mockData.plans.map((plan) => (
            <React.Fragment key={plan.id}>
              <View style={styles.plan}>
                <Row style={styles.planContent}>
                  <CheckBox
                    isChecked={selected === plan.id}
                    onChange={() => setSelected(plan.id)}
                  />
                  <TextField text={plan.description} style={styles.planText} />
                </Row>
              </View>
              <Gap horizontal={false} gap={20} />
            </React.Fragment>
          ))}
          <Gap horizontal={false} gap={40} />

          <Button variant="primary" disabled={!selected} text={t('next')} />

          <Gap horizontal={false} gap={130} />
        </ScrollContainer>
      </View>
    </Container>
  )
}

export default Pricing
