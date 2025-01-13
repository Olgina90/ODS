import { CSSProperties } from "react"
import { ChipWrapper, ChipWrapperProps } from "./styled"

type ChipProps = ChipWrapperProps

export default function Chip({backgroundColor}: ChipProps){
    return <ChipWrapper backgroundColor={backgroundColor}></ChipWrapper>
}