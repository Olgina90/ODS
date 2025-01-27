import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type BoxWrapperProps = Pick<Partial<CSSProperties>, 'margin' | 'padding' | 'display'>

export const BoxWrapper = newStyled('div')<BoxWrapperProps>`
margin: ${({ margin }) => margin || 'initial'};
padding: ${({ padding }) => padding || 'initial'};
`
