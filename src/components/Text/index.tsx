import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { TextWrapper } from './styled'

type TextProps = PropsWithChildren<{
    tag?: 'span' | 'b'
}>

export default function Text({ children, tag='span'  }: TextProps) {
  return <TextWrapper as={tag}>{children}</TextWrapper>
}
