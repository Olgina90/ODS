import { PropsWithChildren } from 'react'
import { BoxWrapper, BoxWrapperProps } from './styled'

type BoxProps = PropsWithChildren<BoxWrapperProps>

export default function Box({ children, ...boxWrapperProps }: BoxProps) {
  return <BoxWrapper {...boxWrapperProps}>{children}</BoxWrapper>
}
