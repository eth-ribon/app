import styled, { css } from "styled-components";
import { Props } from ".";

export const Container = styled.div<Props>`
  ${({ color }) => css`
    color: ${color!};
  `}
  display: inline;
`;
