import { t } from '@/i18n'

export const TAB_NAVIGATOR_ICON_MAP = {
  MENU_ICON: 'menuIcon',
  SETTINGS_ICON: 'settingsIcon',
  BALLOON_HOT_ICON: 'balloonHotIcon',
  ACCOUNT_ICON: 'accountIcon',
}

export const NAV_SCREENS = {
  stacks: {
    menuStack: t('Menu'),
    settingsStack: t('Settings'),
    homeStack: t('Home'),
    accountStack: t('My account'),
  },
  screens: { 'menuStack:screenA': t('menuStack:screenA') },
}
