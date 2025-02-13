import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type Rep1_TextWrapperProps = Pick<CSSProperties, 'color' | 'fontSize'>

export const Rep1_TextWrapper = newStyled('span')<Rep1_TextWrapperProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
`
