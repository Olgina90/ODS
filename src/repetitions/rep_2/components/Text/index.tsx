import { PropsWithChildren } from 'react'
import { TextWrapper } from './styled'
import { TextWrapperProps } from '../../../../components/Text/styled'

type TextProps = PropsWithChildren<
  {
    tag?: 'span' | 'b' | 'p' | 'div'
    className?: string
  } & TextWrapperProps
>

export default function Text({
  children,
  tag = 'span',
  color,
  fontSize,
  className,
}: TextProps) {
  return (
    <TextWrapper
      as={tag}
      color={color}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </TextWrapper>
  )
}
