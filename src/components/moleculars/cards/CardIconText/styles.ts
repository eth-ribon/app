import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    width: 100%;
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.1);
    border-radius: 16px;
    padding: 0 8px;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    margin-right: 10px;
    width: 24px;
    height: 24px;
    object-fit: cover;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.ribonBlack};
  `}
`;

export const LeftContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    width: 67%;
  `}
`;

export const RightContainer = styled.div`
  ${() => css`
    width: 33%;
  `}
`;
