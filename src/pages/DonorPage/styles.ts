import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    margin-bottom: 0;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-bottom: 24px;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
  `}
`;
