import {
  ChipWrapper,
  ChipWrapperProps,
} from '../../../../components/Chip/styled'

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
