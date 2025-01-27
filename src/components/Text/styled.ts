import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type TextWrapperProps = Pick<CSSProperties, 'color' | 'fontSize'>

export const TextWrapper = newStyled('span')<TextWrapperProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
`
