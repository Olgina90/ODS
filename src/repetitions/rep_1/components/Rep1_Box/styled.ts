import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type Rep1_BoxWrapperProps = Pick<CSSProperties, 'margin' | 'padding'>

export const Rep1_BoxWrapper = newStyled('div')<Rep1_BoxWrapperProps>`
    margin: ${({ margin }) => margin || 'initial'};
    padding: ${({ padding }) => padding || 'initial'};
`
