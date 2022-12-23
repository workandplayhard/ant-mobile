import { NavTabs, TAB_NAVIGATOR_ICON_MAP } from '@/navigation/constants'

/**
 * Get route name
 * @param {*} routeName: Menu | Settings | Lorem | My account
 * @returns icon name
 */

export const getIconName = (routeName: string) => {
  let iconName

  switch (routeName) {
    case NavTabs.menuTab:
      iconName = TAB_NAVIGATOR_ICON_MAP.MENU_ICON
      break
    case NavTabs.settingsTab:
      iconName = TAB_NAVIGATOR_ICON_MAP.SETTINGS_ICON
      break
    case NavTabs.homeTab:
      iconName = TAB_NAVIGATOR_ICON_MAP.BALLOON_HOT_ICON
      break
    default:
      iconName = TAB_NAVIGATOR_ICON_MAP.ACCOUNT_ICON
      break
  }

  return iconName
}
