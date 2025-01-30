import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type Rep2_BoxWrapperProps = Pick<CSSProperties, 'margin' | 'padding'>

export const Rep2_BoxWrapper = newStyled('div')<Rep2_BoxWrapperProps>`
    margin: ${({ margin }) => margin || 'initial'};
    padding: ${({ padding }) => padding || 'initial'};
`
