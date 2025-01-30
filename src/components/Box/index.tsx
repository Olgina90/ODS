import { PropsWithChildren } from 'react'
import { BoxWrapper, BoxWrapperProps } from './styled'

type BoxProps = PropsWithChildren<{} & BoxWrapperProps>

export default function Box({
  children,
  display,
  margin,
  padding,
  backgroundColor,
}: BoxProps) {
  return (
    <BoxWrapper
      display={display}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </BoxWrapper>
  )
}
