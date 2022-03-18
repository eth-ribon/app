import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  `}
`;

type DividerProps = {
  width?: string;
};
export const Divider = styled.div<DividerProps>`
  ${({ width, color }) => css`
    width: ${width};

    display: flex;
    align-items: center;
    text-align: center;
    color: ${color};

    &::before,
    &::after {
      content: "";
      flex: 1;
      border-bottom: 2px solid ${color};
    }

    &:not(:empty)::before {
      margin-right: 0.25em;
    }

    &:not(:empty)::after {
      margin-left: 0.25em;
    }
  `}
`;
