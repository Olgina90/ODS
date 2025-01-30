import { PropsWithChildren } from 'react'
import { Rep2_BoxWrapper, Rep2_BoxWrapperProps } from './styled'

export type Rep2_BoxProps = PropsWithChildren<{} & Rep2_BoxWrapperProps>

export default function Rep2_Box({ children, margin, padding }: Rep2_BoxProps) {
  return (
    <Rep2_BoxWrapper margin={margin} padding={padding}>
      {children}
    </Rep2_BoxWrapper>
  )
}
