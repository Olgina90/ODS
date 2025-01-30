import newStyled from '@emotion/styled'
import { CSSProperties } from 'react'

export type BoxWrapperProps = Pick<
  Partial<CSSProperties>,
  'margin' | 'padding' | 'display' | 'backgroundColor'
>

export const BoxWrapper = newStyled('div')<BoxWrapperProps>`
display: ${({ display }) => display || 'initial'};
margin: ${({ margin }) => margin || 'initial'};
padding: ${({ padding }) => padding || 'initial'};
background-color: ${({ backgroundColor }) => backgroundColor || 'initial'};
`
