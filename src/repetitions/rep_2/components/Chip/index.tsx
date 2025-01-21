import { ChipWrapper } from '../../../../components/Chip/styled'
import { ChipWrapperProps } from './styled'

type ChipProps = ChipWrapperProps & {
  className?: string
  label: string
}

export default function Chip({ className, label, variant }: ChipProps) {
  return (
    <ChipWrapper className={className} variant={variant}>
      {label}
    </ChipWrapper>
  )
}
