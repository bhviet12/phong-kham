import { Button, ConfigProvider, theme } from "antd"
import type { FC, ReactNode } from "react"
import type { ButtonProps } from "antd"

const { useToken } = theme

interface ColorButtonProps extends Omit<ButtonProps, "color"> {
  children: ReactNode
  color?: string
}

const ColorButton: FC<ColorButtonProps> = ({ children, color, type, ...props }) => {
  const { token } = useToken()

  let overwriteColor = token.colorPrimary
  let overwriteTextColor = token.colorTextLightSolid
  const overwriteType = type 

  switch (color) {
    case "primary":
      overwriteColor = "#2484FC"
      overwriteTextColor = "#FFFFFF"
      break
    case "secondary":
      overwriteColor = "#1ABC9C"
      overwriteTextColor = "#000000"
      break
    case "third":
      overwriteColor = "#E3F2FD"
      overwriteTextColor = "#1976D2"
      break
    default:
      overwriteColor = color || token.colorPrimary
  }

  const modifiedTheme = {
    token: {
      ...token,
      borderRadius: 20, 
    },
    components: {
      Button: {
        colorPrimary: overwriteColor,
        colorTextLightSolid: overwriteTextColor,
        algorithm: true,
      },
    },
  }

  return (
    <ConfigProvider theme={modifiedTheme}>
      <Button {...props} type={overwriteType}>
        {children}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
