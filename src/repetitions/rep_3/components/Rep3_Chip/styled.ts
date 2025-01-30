import newStyled from '@emotion/styled'
import Rep3_Text from '../Rep3_Text'
import { css } from '@emotion/react'

export type Rep3_ChipWrapperProps = {
  variant?: 'Outlined' | 'Filled'
}

export const Rep3_ChipWrapper = newStyled(Rep3_Text)<Rep3_ChipWrapperProps>`
padding: 8px 16px;
border-radius: 20px;
${({ variant }) => {
  switch (variant) {
    case 'Filled':
      return Rep3_ChipWrapperFilledStyles
    case 'Outlined':
    default:
      return Rep3_ChipWrapperOutlinedStyles
  }
}}
`

const Rep3_ChipWrapperOutlinedStyles = css`
  border: solid 1px #bdbdbd;
  color: #000000de;
`

const Rep3_ChipWrapperFilledStyles = css`
  background-color: #00000014;
  color: #000000de;
`
