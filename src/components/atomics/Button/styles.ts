import styled, { css } from "styled-components";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  ribonsColor?: string;
  leftIcon?: string;
  disabled?: boolean;
  borderRadius?: string;
};

export const Container = styled.button`
  ${({
    disabled,
    textColor,
    borderColor,
    backgroundColor,
    borderRadius,
  }: Props) => css`
    position: relative;
    border: 1px solid black;
    border-radius: ${borderRadius || "8px"};
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor};
    border-color: ${borderColor || backgroundColor};
    color: ${textColor};
    opacity: ${disabled ? 0.5 : 1};

    media :hover {
      cursor: pointer;
    }

    #left-icon {
      position: absolute;
      left: 8px;
    }

    svg {
      margin-left: 2px;

      path {
        fill: ${(props: Props) => props.ribonsColor};
      }
    }
  `}
`;
