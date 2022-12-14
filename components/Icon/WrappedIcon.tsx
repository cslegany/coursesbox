import { FC } from "react";
import styled from "@emotion/styled";

import { Icons } from "./Icons";

export type AvailableIcons = keyof typeof Icons;

type WrapperProps = {
     /** Width and height */
    size: string;
}

export type Props = {
    /** Icon name */
    name: AvailableIcons;
} & WrapperProps & React.SVGProps<SVGSVGElement>;

const Wrapper = styled.div<WrapperProps>`
    color: ${({ theme }) => theme.font.regular};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`;

export const WrappedIcon: FC<Props> = ({ name, size = "2rem", ...rest }) => {
    const Icon = Icons[name];
    const sizes = { width: size, height: size };

    return (
        <Wrapper size={size}>
            <Icon {...sizes} {...rest} />
        </Wrapper>
    );
};