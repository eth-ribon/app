import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
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
