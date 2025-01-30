import { Rep3_ChipWrapper, Rep3_ChipWrapperProps } from './styled'

export type Rep3_ChipProps = {
  classname?: string
  label: string
} & Rep3_ChipWrapperProps

export default function Rep3_Chip({
  classname,
  label,
  variant,
}: Rep3_ChipProps) {
  return (
    <Rep3_ChipWrapper className={classname} variant={variant}>
      {label}
    </Rep3_ChipWrapper>
  )
}
