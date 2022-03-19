import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;

export const GridContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
  `}
`;
