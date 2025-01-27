import { Rep1_ChipWrapperProps, Rep1_ChipWrapper } from './styled'

type Rep1_ChipProps = Rep1_ChipWrapperProps & {
  className?: string
  label: string
}

export default function Rep1_Chip({ className, label, variant }: Rep1_ChipProps) {
  return (
    <Rep1_ChipWrapper className={className} variant={variant}>
      {label}
    </Rep1_ChipWrapper>
  )
}
