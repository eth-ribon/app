import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    position: absolute;
    bottom: 110px;
    right: 14px;
    width: 50%;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;
