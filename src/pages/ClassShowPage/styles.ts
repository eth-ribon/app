import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 110px;
    right: 14px;
    width: 50%;

    @media (min-width: ${theme.breakpoints.pad}) {
      position: static;
      margin-top: 28px;
      width: 100%;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;
