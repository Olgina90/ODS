import { ChipWrapper, ChipWrapperProps } from './styled'

type ChipProps = ChipWrapperProps

export default function Chip({ backgroundColor, padding, border }: ChipProps) {
  return (
    <ChipWrapper
      backgroundColor={backgroundColor}
      padding={padding}
      border={border}
    >Chip</ChipWrapper>
  )
}
