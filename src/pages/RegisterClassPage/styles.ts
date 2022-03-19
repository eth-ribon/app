import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css``}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin: 16px 0 8px 0;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    height: 39px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${theme.colors.ribonBlue};
    padding: 8px;
    margin-bottom: 8px;
  `}
`;

export const SearchDiv = styled.div`
  ${() => css`
    z-index: 3;
    top: 80px;
    width: 100%;
    box-shadow: 0px 4px 12px rgba(24, 86, 105, 0.1);
    border-radius: 16px;
  `}
`;

export const PlusIconContainer = styled.div`
  ${() => css`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    float: right;
  `}
`;

export const PlusIconImg = styled.img`
  ${() => css`
    object-fit: contain;
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    position: fixed;
    bottom: 90px;
    width: 90%;
  `}
`;
