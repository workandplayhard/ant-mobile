import { TAB_NAVIGATOR_ICON_MAP } from '@/navigation/constants'

/**
 * Get route name
 * @param {*} routeName: Menu | Settings | Lorem | My account
 * @returns icon name
 */

export const getIconName = (routeName: string) => {
  let iconName

  switch (routeName) {
    case 'Menu':
      iconName = TAB_NAVIGATOR_ICON_MAP.MENU_ICON
      break
    case 'Settings':
      iconName = TAB_NAVIGATOR_ICON_MAP.SETTINGS_ICON
      break
    case 'Home':
      iconName = TAB_NAVIGATOR_ICON_MAP.BALLOON_HOT_ICON
      break
    default:
      iconName = TAB_NAVIGATOR_ICON_MAP.ACCOUNT_ICON
      break
  }

  return iconName
}
