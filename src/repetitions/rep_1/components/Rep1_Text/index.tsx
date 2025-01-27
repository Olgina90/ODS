import { PropsWithChildren } from 'react'

import { Rep1_TextWrapper, Rep1_TextWrapperProps } from './styled'

type Rep1_TextProps = PropsWithChildren<
  {
    tag?: 'span' | 'b' | 'p' | 'div'
    className?: string
  } & Rep1_TextWrapperProps
>

export default function Rep1_Text({
  children,
  tag = 'span',
  color,
  fontSize,
  className,
}: Rep1_TextProps) {
  return (
    <Rep1_TextWrapper
      as={tag}
      color={color}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </Rep1_TextWrapper>
  )
}
