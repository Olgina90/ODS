import { ChipWrapper, ChipWrapperProps } from '../../../components/Chip/styled'

type ChipProps = ChipWrapperProps

export default function Chip({ backgroundColor }: ChipProps) {
  return <ChipWrapper backgroundColor={backgroundColor}></ChipWrapper>
}
