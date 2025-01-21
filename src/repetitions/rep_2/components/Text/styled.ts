import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type TextWrapperProps = {
  color?: CSSProperties['color']
  fontSize?: CSSProperties['fontSize']
}

export const TextWrapper = newStyled('span')<TextWrapperProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
`
