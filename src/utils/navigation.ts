import { NAV_SCREENS, TAB_NAVIGATOR_ICON_MAP } from '@/navigation/constants'

/**
 * Get route name
 * @param {*} routeName: Menu | Settings | Lorem | My account
 * @returns icon name
 */

export const getIconName = (routeName: string) => {
  let iconName

  switch (routeName) {
    case NAV_SCREENS.stacks.menuStack:
      iconName = TAB_NAVIGATOR_ICON_MAP.MENU_ICON
      break
    case NAV_SCREENS.stacks.settingsStack:
      iconName = TAB_NAVIGATOR_ICON_MAP.SETTINGS_ICON
      break
    case NAV_SCREENS.stacks.homeStack:
      iconName = TAB_NAVIGATOR_ICON_MAP.BALLOON_HOT_ICON
      break
    default:
      iconName = TAB_NAVIGATOR_ICON_MAP.ACCOUNT_ICON
      break
  }

  return iconName
}
