import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type TextWrapperProps = {
  color?: CSSProperties['color']
  fontSize?: CSSProperties['fontSize']
}

export const Rep2_TextWrapper = newStyled('span')<TextWrapperProps>`
color: ${({ color }) => color || 'inherit'};
font-size: ${({ fontSize }) => fontSize || 'inherit'};
`
