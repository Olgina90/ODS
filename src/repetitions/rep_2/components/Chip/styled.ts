import newStyled from '@emotion/styled'
import Text from '../Text'
import { css } from '@emotion/react'

export type ChipWrapperProps = {
  variant: 'Outlined' | 'Filled'
}

export const ChipWrapper = newStyled(Text)<ChipWrapperProps>`
padding: 8px 16px;
border-radius: 20px;
${({ variant }) => {
  switch (variant) {
    case 'Filled':
      return ChipWrapperFilledStyles
    case 'Outlined':
      return ChipWrapperOutlinedStyles
  }
}}
`

const ChipWrapperOutlinedStyles = css`
  border: 1px solid #bdbdbd;
  color: #000000de;
`
const ChipWrapperFilledStyles = css`
  background-color: #00000014;
  color: #000000de;
`
