import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 14px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      margin: 0 14%;
    }
  `}
`;

export const Settings = styled.img`
  ${() => css`
    cursor: pointer;
  `}
`;
