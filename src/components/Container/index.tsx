import type { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ 
  children, 
  className = ""
}) => {
  const customStyle = {
    maxWidth: "1526px",
    padding: "0px 16px",
    margin: "0px 149.5px",
  }

  return (
    <div 
      className={className.trim()}
      style={customStyle}
    >
      {children}
    </div>
  )
}

export default Container
