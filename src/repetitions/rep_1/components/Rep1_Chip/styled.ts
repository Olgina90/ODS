import newStyled from '@emotion/styled'
import { css } from '@emotion/react'
import Rep1_Text from '../Rep1_Text'

export type Rep1_ChipWrapperProps = {
  variant?: 'Outlined' | 'Filled'
}

export const Rep1_ChipWrapper = newStyled(Rep1_Text)<Rep1_ChipWrapperProps>`
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

const ChipWrapperOutlinedStyles = css`
  border: solid 1px #bdbdbd;
  color: #000000de;
`
const ChipWrapperFilledStyles = css`
  background-color: #00000014;
  color: #000000de;
`
