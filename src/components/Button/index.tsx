import { Button, ConfigProvider } from "antd"
import type { FC, ReactNode, CSSProperties } from "react"
import type { ButtonProps } from "antd"
import { useMemo, useCallback } from "react"

interface ColorButtonProps extends Omit<ButtonProps, "color" | "size"> {
  children: ReactNode
  color?: "primary" | "secondary" | "third"
  size?: "small" | "medium" | "large"
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

type ButtonColor = "primary" | "secondary" | "third"
type ButtonSize = "small" | "medium" | "large"

const ColorButton: FC<ColorButtonProps> = ({ 
  children, 
  color = "primary", 
  size = "medium",
  type,
  className = "",
  style,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  ...props 
}) => {
  // Size configs
  const sizeConfigs: Record<ButtonSize, { padding: string; fontSize: string; height: string }> = {
    small: { padding: "4px 16px", fontSize: "14px", height: "32px" },
    medium: { padding: "8px 24px", fontSize: "16px", height: "40px" },
    large: { padding: "12px 32px", fontSize: "18px", height: "48px" },
  }

  // Style configs cho từng button
  const baseStyles: Record<ButtonColor, CSSProperties> = {
    primary: {
      background: "linear-gradient(to right, #22c55e, #16a34a)",
      border: "none",
      borderRadius: "9999px",
      color: "#000000",
      boxShadow: "0 4px 8px rgba(34, 197, 94, 0.3), 0 -2px 4px rgba(34, 197, 94, 0.2)",
    },
    secondary: {
      background: "linear-gradient(to right, #3b82f6, #2563eb)",
      border: "none",
      borderRadius: "9999px",
      color: "#ffffff",
      boxShadow: "0 4px 8px rgba(59, 130, 246, 0.3), 0 -2px 4px rgba(59, 130, 246, 0.2)",
    },
    third: {
      background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      borderRadius: "8px",
      color: "#000000",
      fontWeight: 600,
      boxShadow: "0 4px 8px rgba(59, 130, 246, 0.15), 0 -2px 4px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
    }
  }

  // Hover styles
  const hoverStyles: Record<ButtonColor, { background: string; boxShadow: string }> = {
    primary: { 
      background: "linear-gradient(to right, #16a34a, #15803d)",
      boxShadow: "0 6px 12px rgba(34, 197, 94, 0.4), 0 -3px 6px rgba(34, 197, 94, 0.3)"
    },
    secondary: { 
      background: "linear-gradient(to right, #2563eb, #1d4ed8)",
      boxShadow: "0 6px 12px rgba(59, 130, 246, 0.4), 0 -3px 6px rgba(59, 130, 246, 0.3)"
    },
    third: { 
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
      boxShadow: "0 6px 12px rgba(59, 130, 246, 0.25), 0 -3px 6px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)"
    }
  }

  // Disabled styles
  const disabledStyles: Record<ButtonColor, CSSProperties> = {
    primary: {
      background: "linear-gradient(to right, #9ca3af, #6b7280)",
      color: "#ffffff",
      opacity: 0.6,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    secondary: {
      background: "linear-gradient(to right, #9ca3af, #6b7280)",
      color: "#ffffff",
      opacity: 0.6,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    third: {
      background: "#f3f4f6",
      color: "#9ca3af",
      opacity: 0.6,
      cursor: "not-allowed",
      boxShadow: "none",
      border: "1px solid #e5e7eb",
    }
  }

  // Memoized button style
  const buttonStyle = useMemo(() => {
    const baseStyle = baseStyles[color]
    const sizeStyle = sizeConfigs[size]
    const finalStyle = disabled ? { ...baseStyle, ...disabledStyles[color] } : baseStyle
    
    return {
      ...finalStyle,
      padding: sizeStyle.padding,
      fontSize: sizeStyle.fontSize,
      height: sizeStyle.height,
      ...style,
    }
  }, [color, size, disabled, style])

  // Memoized button type
  const buttonType = useMemo(() => {
    return type || (color === "third" ? "default" : "primary")
  }, [type, color])

  // Memoized className
  const buttonClassName = useMemo(() => {
    const baseClasses = "transition-all duration-300"
    const disabledClass = disabled ? "cursor-not-allowed" : ""
    return `${baseClasses} ${disabledClass} ${className}`.trim()
  }, [disabled, className])

  // Memoized theme config
  const themeConfig = useMemo(() => ({
    token: { 
      borderRadius: color === "third" ? 8 : 9999,
    },
  }), [color])

  // Hover handlers với useCallback
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    
    const hover = hoverStyles[color]
    e.currentTarget.style.background = hover.background
    e.currentTarget.style.boxShadow = hover.boxShadow
    props.onMouseEnter?.(e)
  }, [color, disabled, loading, props])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    
    const normal = baseStyles[color]
    e.currentTarget.style.background = normal.background as string
    e.currentTarget.style.boxShadow = normal.boxShadow as string
    props.onMouseLeave?.(e)
  }, [color, disabled, loading, props])

  // Ant Design size mapping
  const antdSize = size === "small" ? "small" : size === "large" ? "large" : "middle"

  // Render content with icons
  const renderContent = () => {
    if (leftIcon && rightIcon) {
      return (
        <>
          <span className="mr-2">{leftIcon}</span>
          {children}
          <span className="ml-2">{rightIcon}</span>
        </>
      )
    }
    if (leftIcon) {
      return (
        <>
          <span className="mr-2">{leftIcon}</span>
          {children}
        </>
      )
    }
    if (rightIcon) {
      return (
        <>
          {children}
          <span className="ml-2">{rightIcon}</span>
        </>
      )
    }
    return children
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <Button 
        {...props} 
        type={buttonType}
        size={antdSize}
        className={buttonClassName}
        style={buttonStyle}
        disabled={disabled}
        loading={loading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {renderContent()}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
