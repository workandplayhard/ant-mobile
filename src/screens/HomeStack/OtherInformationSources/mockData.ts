import { t } from '@/i18n'

import MizrahiTefahotBank from '@/assets/images/img_mizrahi_tefahot_bank.png'
import MachineLearning from '@/assets/images/img_machine_learning_islael.png'
import BankHapoalim from '@/assets/images/img_bank_hapoalim.png'

export default {
  data: {
    footerListItems: [
      'Lorem Ipsum is simply dummy',
      'Lorem Ipsum is simiply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum is simply dummy',
    ],
    modalContentExample:
      // eslint-disable-next-line max-len
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    headingExample: 'Lorem Ipsum is simply dummy',
    informationModalButton: 'Lorem Ipsum',
    banks: [
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
      },
      {
        label: t('accountTransactions'),
        isSelected: false,
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
        value: 'threYears',
      },
    ],
  },
}
