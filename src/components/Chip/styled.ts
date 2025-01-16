import newStyled from '@emotion/styled'
import Text from '../Text'
import { CSSProperties } from 'react'

export type ChipWrapperProps = {
  backgroundColor?: CSSProperties['backgroundColor']
  border?: CSSProperties['border']
  padding?: CSSProperties['padding']
}

export const ChipWrapper = newStyled(Text)<ChipWrapperProps>`

`
