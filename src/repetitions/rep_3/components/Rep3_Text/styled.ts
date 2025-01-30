import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type Rep3_TextWrapperProps = Pick<CSSProperties, 'color' | 'fontSize'>

export const Rep3_TextWrapper = newStyled('span')<Rep3_TextWrapperProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
`
