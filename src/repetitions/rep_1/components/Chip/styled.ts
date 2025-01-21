import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'
import { css } from '@emotion/react'
import Text from '../Text'


export type ChipWrapperProps = {
  variant?: 'Outlined' | 'Filled'
}

export const ChipWrapper = newStyled(Text)<ChipWrapperProps>`
    padding: 8px 16px;
    border-radius: 20px;
    ${({ variant }) => {
      switch (variant) {
        case 'Filled':
          return ChipWrapperFilledStyles
        case 'Outlined':
        default:
          return ChipWrapperOutlinedStyles
      }
    }}
`

const ChipWrapperFilledStyles = css`
  border: solid 1px #bdbdbd;
  color: #000000de;
`
const ChipWrapperOutlinedStyles = css`
  background-color: #00000014;
  color: #000000de;
`
