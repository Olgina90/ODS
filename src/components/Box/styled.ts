import styled from '@emotion/styled'

export type BoxWrapperProps = Required<
  Pick<React.CSSProperties, 'margin' | 'padding'>
>

export const BoxWrapper = styled.div<BoxWrapperProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`
