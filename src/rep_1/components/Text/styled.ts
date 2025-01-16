import newStyled from "@emotion/styled";
import { CSSProperties } from "react";
import Text from "../../../components/Text";

export type TextWrapperProps = {
    color?: string
    fontSize?: CSSProperties['fontSize']
}

export const TextWrapper = newStyled(Text)<TextWrapperProps>`
    color: ${({color}) => color || 'inherit'};
    font-size: ${({fontSize}) => fontSize || 'inherit'}
`