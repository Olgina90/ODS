import { PropsWithChildren } from 'react'
import { BoxWrapper, BoxWrapperProps } from './styled'

type BoxProps = PropsWithChildren<{} & BoxWrapperProps>

export default function Box({ children, margin, padding }: BoxProps) {
  return (
    <BoxWrapper margin={margin} padding={padding}>
      {children}
    </BoxWrapper>
  )
}
