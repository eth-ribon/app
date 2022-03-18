import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 140px;
    min-width: 240px;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 14px;
    background-color: ${theme.colors.ribonWhite};
    cursor: pointer;
    box-shadow: 8px 8px 20px -2px rgba(192, 192, 192, 0.75);
  `}
`;

export const Image = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  border-radius: 200px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  line-height: 25px;
`;

export const Subtitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.ribonBlue};
  `}
`;
