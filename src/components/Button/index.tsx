import { Button, ConfigProvider } from "antd"
import type { FC, ReactNode, CSSProperties } from "react"
import type { ButtonProps } from "antd"
import { useCallback, useMemo } from "react"

interface ColorButtonProps extends Omit<ButtonProps, "color" | "size"> {
  children: ReactNode
  color?: "primary" | "secondary" | "third"
  size?: "small" | "medium" | "large"
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

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
  // Configs - memoized to avoid recreating on every render
  const configs = useMemo(() => ({
    size: {
      small: { padding: "4px 16px", fontSize: "14px", height: "32px" },
      medium: { padding: "8px 24px", fontSize: "16px", height: "40px" },
      large: { padding: "12px 32px", fontSize: "18px", height: "48px" },
    },
    style: {
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
        background: "#ffffff",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "9999px",
        color: "#000000",
        fontWeight: 600,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05)",
      }
    },
    hover: {
      primary: { 
        background: "linear-gradient(to right, #16a34a, #15803d)",
        boxShadow: "0 6px 12px rgba(34, 197, 94, 0.4), 0 -3px 6px rgba(34, 197, 94, 0.3)"
      },
      secondary: { 
        background: "linear-gradient(to right, #2563eb, #1d4ed8)",
        boxShadow: "0 6px 12px rgba(59, 130, 246, 0.4), 0 -3px 6px rgba(59, 130, 246, 0.3)"
      },
      third: { 
        background: "#f8f9fa",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15), 0 -3px 6px rgba(0, 0, 0, 0.08)"
      }
    },
    disabled: {
      primary: { background: "linear-gradient(to right, #9ca3af, #6b7280)", color: "#ffffff", opacity: 0.6, cursor: "not-allowed", boxShadow: "none" },
      secondary: { background: "linear-gradient(to right, #9ca3af, #6b7280)", color: "#ffffff", opacity: 0.6, cursor: "not-allowed", boxShadow: "none" },
      third: { background: "#f3f4f6", color: "#9ca3af", opacity: 0.6, cursor: "not-allowed", boxShadow: "none", border: "1px solid #e5e7eb" }
    }
  }), [])

  // Button style
  const buttonStyle: CSSProperties = {
    ...configs.style[color],
    ...(disabled ? configs.disabled[color] : {}),
    ...configs.size[size],
    ...style,
  }

  // Hover handlers
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    const hover = configs.hover[color]
    e.currentTarget.style.background = hover.background
    e.currentTarget.style.boxShadow = hover.boxShadow
    props.onMouseEnter?.(e)
  }, [color, disabled, loading, configs.hover, props])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    const normal = configs.style[color]
    e.currentTarget.style.background = normal.background as string
    e.currentTarget.style.boxShadow = normal.boxShadow as string
    props.onMouseLeave?.(e)
  }, [color, disabled, loading, configs.style, props])

  // Content với icons
  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  )

  return (
    <ConfigProvider theme={{ token: { borderRadius: color === "third" ? 8 : 9999 } }}>
      <Button 
        {...props} 
        type={type || (color === "third" ? "default" : "primary")}
        size={size === "small" ? "small" : size === "large" ? "large" : "middle"}
        className={`transition-all duration-300 ${disabled ? "cursor-not-allowed" : ""} ${className}`.trim()}
        style={buttonStyle}
        disabled={disabled}
        loading={loading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
