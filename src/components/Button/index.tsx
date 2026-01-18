import { Button, ConfigProvider } from "antd"
import type { FC, ReactNode } from "react"
import type { ButtonProps } from "antd"

interface ColorButtonProps extends Omit<ButtonProps, "color"> {
  children: ReactNode
  color?: "primary" | "secondary" | "third"
}

const ColorButton: FC<ColorButtonProps> = ({ 
  children, 
  color = "primary", 
  type,
  className = "",
  style,
  ...props 
}) => {
  // Style configs cho từng button
  const styles = {
    primary: {
      background: "linear-gradient(to right, #22c55e, #16a34a)",
      border: "none",
      borderRadius: "9999px",
    },
    secondary: {
      background: "linear-gradient(to right, #3b82f6, #2563eb)",
      border: "none",
      borderRadius: "9999px",
      color: "#ffffff",
    },
    third: {
      background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      borderRadius: "8px",
      color: "#1e40af",
      fontWeight: 600,
      boxShadow: "0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
    }
  }

  const hoverStyles = {
    primary: { background: "linear-gradient(to right, #16a34a, #15803d)" },
    secondary: { background: "linear-gradient(to right, #2563eb, #1d4ed8)" },
    third: { 
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
    }
  }

  const buttonStyle = { ...styles[color], ...style }
  const buttonType = type || (color === "third" ? "default" : "primary")
  const buttonClassName = `${className} hover:shadow-lg transition-all duration-300`.trim()

  return (
    <ConfigProvider theme={{ token: { borderRadius: color === "third" ? 8 : 9999 } }}>
      <Button 
        {...props} 
        type={buttonType} 
        className={buttonClassName}
        style={buttonStyle}
        onMouseEnter={(e) => {
          const hover = hoverStyles[color]
          e.currentTarget.style.background = hover.background
          if ('boxShadow' in hover) {
            e.currentTarget.style.boxShadow = hover.boxShadow
          }
          props.onMouseEnter?.(e)
        }}
        onMouseLeave={(e) => {
          const normal = styles[color]
          e.currentTarget.style.background = normal.background as string
          if ('boxShadow' in normal) {
            e.currentTarget.style.boxShadow = normal.boxShadow as string
          }
          props.onMouseLeave?.(e)
        }}
      >
        {children}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
