import newStyled from "@emotion/styled";
import { CSSProperties } from "react";
import Text from "../../../components/Text";

export type ChipWrapperProps = {
    backgroundColor?: CSSProperties['backgroundColor']
}

export const ChipWrapper = newStyled(Text)<ChipWrapperProps>`

`