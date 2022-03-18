import styled, { css } from "styled-components";

type Props = {
  disabled: boolean;
};

export const ArrowRightImage = styled.svg<Props>`
  ${({ fill, disabled }) => css`
    width: 28px;
    height: 56px;
    position: absolute;
    border-radius: 100% / 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;
    left: auto;
    right: 0px;
    background-color: ${disabled ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.6)"};
    fill: ${fill};
  `}
`;

export const ArrowLeftImage = styled.svg<Props>`
  ${({ disabled, fill }) => css`
    width: 28px;
    height: 56px;
    position: absolute;
    border-radius: 100% / 50%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;
    left: 0px;
    background-color: ${disabled ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.6)"};
    fill: ${fill};
  `}
`;

