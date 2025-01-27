import newStyled from '@emotion/styled'
import Rep2_Text from '../Rep2_Text'
import { css } from '@emotion/react'

export type Rep2_ChipWrapperProps = {
  variant?: 'Outlined' | 'Filled'
}

export const Rep2_ChipWrapper = newStyled(Rep2_Text)<Rep2_ChipWrapperProps>`
padding: 8px 16px;
border-radius: 20px;
${({ variant }) => {
  switch (variant) {
    case 'Filled':
      return Rep2_ChipWrapperFilledStyles
    case 'Outlined':
    default:
      return Rep2_ChipWrapperOutlinedStyles
  }
}}
`

const Rep2_ChipWrapperOutlinedStyles = css`
  border: solid 1px #bdbdbd;
  color: #000000de;
`

const Rep2_ChipWrapperFilledStyles = css`
  background-color: #00000014;
  color: #000000de;
`
