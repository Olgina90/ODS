import { PropsWithChildren } from 'react'
import { Rep3_TextWrapper, Rep3_TextWrapperProps } from './styled'

export type Rep3_TextProps = PropsWithChildren<
  {
    tag?: 'span' | 'b' | 'p' | 'div'
    className?: string
  } & Rep3_TextWrapperProps
>

export default function Rep3_Text({
  children,
  className,
  tag = 'span',
  color,
  fontSize,
}: Rep3_TextProps) {
  return (
    <Rep3_TextWrapper
      as={tag}
      color={color}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </Rep3_TextWrapper>
  )
}
