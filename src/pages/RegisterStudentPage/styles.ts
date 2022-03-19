import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;

export const Container = styled.div`
  ${() => css``}
`;
