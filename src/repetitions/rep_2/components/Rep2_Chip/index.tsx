import { Rep2_ChipWrapper, Rep2_ChipWrapperProps } from './styled'

type Rep2_ChipProps = Rep2_ChipWrapperProps & {
  classname?: string
  label: string
}

export default function Rep2_Chip({
  classname,
  label,
  variant,
}: Rep2_ChipProps) {
  return (
    <Rep2_ChipWrapper className={classname} variant={variant}>
      {label}
    </Rep2_ChipWrapper>
  )
}
