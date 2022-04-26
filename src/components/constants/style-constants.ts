/*eslint-disable*/

const additional = {
  shadow: {
    card: `box-shadow: 0px 30px 60px -28px rgba(7, 107, 156, 0.15);`
  }
}

const gradients = {
  red: `linear-gradient(45deg, #F857A6, #FF5858)`,
  yellow: `linear-gradient(45deg, #FFE000, #FFAD61)`,
  green: `linear-gradient(45deg, #56AB2F, #A8E063)`,
  blue: `linear-gradient(45deg, #2683FA, #0069EF)`
}

const basePalette = {
  blue: `#2683FA`,
  red: `#D2282B`,
  green: `#00C353`,
  grey: `#E7E8E8`,

  disabled_grey: `#C6C6C6`
}

export const dayTheme = {
  ...basePalette,
  ...additional,
  gradients: gradients,
  background: {
    primary: `#FFFFFF`,
    secondary: `#E8EAEE`
  },
  text: {
    primary: `#171918`,
    secondary: `#6A6F81`
  }
}

export default {
  light: dayTheme,
  dark: dayTheme,
  theme_shift: {
    system: `system`,
    disabled: `scheduled`
  }
}
/*eslint-enable*/
