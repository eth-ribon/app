import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const BottomContainer = styled.div`
  ${() => css`
    margin-top: 28px;
  `}
`;

export const ConnectWalletContainer = styled.div`
  ${() => css`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 33%;
  `}
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
    margin-bottom: 8px;
  `}
`;

export const FundText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 34px;
    font-weight: bold;
  `}
`;

export const FundTextCoin = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 14px;
    font-weight: 400;
  `}
`;

export const InnerContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    height: 39px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${theme.colors.ribonBlue};
    padding: 8px;
  `}
`;

export const BalanceText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
    font-size: 12px;
    font-weight: 400;
    margin: 8px 0 16px 0;
  `}
`;
