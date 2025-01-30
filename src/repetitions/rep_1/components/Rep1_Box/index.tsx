import { PropsWithChildren } from 'react'
import { Rep1_BoxWrapper, Rep1_BoxWrapperProps } from './styled'

export type Rep1_BoxProps = PropsWithChildren<{} & Rep1_BoxWrapperProps>

export default function Rep1_Box({ children, margin, padding }: Rep1_BoxProps) {
  return (
    <Rep1_BoxWrapper margin={margin} padding={padding}>
      {children}
    </Rep1_BoxWrapper>
  )
}
