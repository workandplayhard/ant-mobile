import { t } from '@/i18n'

import MizrahiTefahotBank from '@/assets/images/img_mizrahi_tefahot_bank.png'
import MachineLearning from '@/assets/images/img_machine_learning_islael.png'
import BankHapoalim from '@/assets/images/img_bank_hapoalim.png'

export default {
  data: {
    modalContentExample: t('loremScrambled'),
    headingExample: t('loremIpsumIsSimplyDummy'),
    informationModalButton: 'Lorem Ipsum',
    cards: [
      {
        label: t('mizrahiTefahotBank'),
        value: 'us',
        isSelected: false,
        image: MizrahiTefahotBank,
      },
      {
        label: t('machineLearningIsrael'),
        value: 'cn',
        isSelected: false,
        image: MachineLearning,
      },
      {
        label: t('bankHapoalim'),
        value: 'cn',
        isSelected: false,
        image: BankHapoalim,
      },
    ],
    financial: [
      {
        label: t('accountBalance'),
        isSelected: false,
        value: 'balance',
      },
      {
        label: t('accountTransactions'),
        isSelected: false,
        value: 'transactions',
      },
    ],
    periods: [
      {
        label: t('oneTimeOnly'),
        isSelected: false,
        value: 'oneTime',
      },
      {
        label: t('yearAndHalf'),
        isSelected: false,
        value: 'yearAndHalf',
      },
      {
        label: t('threeYears'),
        isSelected: false,
        value: 'threeYears',
      },
    ],
  },
}
