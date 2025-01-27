import { PropsWithChildren } from 'react'
import { Rep2_TextWrapper, TextWrapperProps } from './styled'

type Rep2_TextProps = PropsWithChildren<
  {
    tag?: 'span' | 'b' | 'p' | 'div'
    className?: string
  } & TextWrapperProps
>

export default function Rep2_Text({
  children,
  tag = 'span',
  color,
  fontSize,
  className,
}: Rep2_TextProps) {
  return (
    <Rep2_TextWrapper
      as={tag}
      color={color}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </Rep2_TextWrapper>
  )
}
