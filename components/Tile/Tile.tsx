import { FC, ReactChild } from "react";
import styled from "@emotion/styled";

import { boxShadow, borderRadius } from "@/components/styles";

const Section = styled.section`
`;

export type Props = {
  /** Header */
  header: ReactChild;
};

export const Tile: FC<Props> = ({ header, children, ...rest }) => (
  <Section {...rest}>
    <h2>{header}</h2>
    {children}
  </Section>
);