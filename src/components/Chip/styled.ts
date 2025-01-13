import newStyled from "@emotion/styled";
import Text from "../Text";
import { CSSProperties } from "react";

export type ChipWrapperProps = {
    backgroundColor?: CSSProperties['backgroundColor']
}

export const ChipWrapper = newStyled(Text)<ChipWrapperProps>`

`