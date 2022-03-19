import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    margin-top: 14px;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    margin-bottom: 0;
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-bottom: 26px;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlack};
    margin-bottom: 14px;
  `}
`;

export const RightContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  `}
`;
