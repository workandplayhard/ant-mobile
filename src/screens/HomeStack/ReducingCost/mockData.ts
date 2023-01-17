import { t } from '@/i18n'

export default {
  costs: [
    {
      iconName: 'messageIcon',
      title: 'SMS',
      cost: '3000',
    },
    {
      iconName: 'ringIcon',
      title: 'Calls',
      cost: '3000',
    },
    {
      iconName: 'balloonThinIcon',
      title: t('internet'),
      cost: '1000 GB',
    },
  ],
  tvs: [
    {
      iconName: 'tvDefaultPlanIcon',
      title: t('reducingLorem'),
      cost: 'ipsum',
    },
    {
      iconName: 'vipIcon',
      title: 'Yes +',
      cost: 'ULTIMATE',
    },
    {
      iconName: 'blackTVIcon',
      title: t('reducingLorem'),
      cost: '1000 GB',
    },
  ],
  currentPlan: [
    {
      iconName: 'tvDefaultPlanIcon',
      title: t('reducingLorem'),
      cost: 'New driver or not',
    },
    {
      iconName: 'vipIcon',
      title: 'Yes +',
      cost: 'Drive the car',
    },
    {
      iconName: 'blackTVIcon',
      title: t('reducingLorem'),
      cost: 'Type of car',
    },
  ],
  telephone: [
    {
      title: 'SMS',
      cost: '3000',
    },
    {
      title: 'Calls',
      cost: '3000',
    },
    {
      title: t('internet'),
      cost: '1000 GB',
    },
  ],
  information: [
    {
      countDescription: t('reducingLorem'),
      informationInternetSize: '1000 GB',
      count: 60,
      SMSSize: 3000,
      callsSize: 3000,
      isSelected: false,
    },
    {
      countDescription: t('reducingLorem'),
      informationInternetSize: '1000 GB',
      count: 70,
      SMSSize: 3000,
      callsSize: 3000,
      isSelected: false,
    },
    {
      countDescription: t('reducingLorem'),
      informationInternetSize: '1000 GB',
      count: 70,
      SMSSize: 3000,
      callsSize: 3000,
      isSelected: false,
    },
    {
      countDescription: t('reducingLorem'),
      informationInternetSize: '1000 GB',
      count: 79,
      SMSSize: 3000,
      callsSize: 3000,
      isSelected: false,
    },
  ],
  costInformation: {
    countDescription: t('reducingLorem'),
    informationInternetSize: '1000 GB',
    count: 99,
    SMSSize: 3000,
    callsSize: 3000,
    isSelected: false,
  },
  planTitleExample: 'Lorem Ipsum is simply dummy',
  planSubTitleExample: 'Lorem Ipsum is simply dummy',
  planCheckText: 'I agree to change the plan.',
  stepData: [
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
  ],
}
