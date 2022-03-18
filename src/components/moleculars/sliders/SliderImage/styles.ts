import styled, { css } from "styled-components";

type NgoImageProps = {
  image: string;
};

export const Container = styled.div`
  position: relative;
  width: 344px;
  height: 209px;
`;

export const NavigationWrapper = styled.div`
  position: relative;
`;

export const SlideImageContainer = styled.div`
  width: 100%;
`;

export const SlideImage = styled.div`
  background-image: url(${(props: NgoImageProps) => props.image});
  width: calc(100vw - 16px);
  height: calc(100vw - 16px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  max-height: 209px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.pad}) {
      border-right: 1px solid white;
      max-width: 344px;
    }
  `}
`;

export const SlideVideo = styled.video`
  ${({ theme }) => css`
    min-width: 100%;
    height: calc(100vw - 16px);
    object-fit: cover;
    max-height: 209px;

    @media (min-width: ${theme.breakpoints.pad}) {
      border-right: 1px solid white;
      max-width: 344px;
    }
  `}
`;

export const PaginationContainer = styled.div`
  padding: 4px 8px;
  z-index: 1;
  width: 36px;
  height: 27px;
  opacity: 0.7;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
`;

export const PaginationNumber = styled.h5`
  color: white;
  text-align: center;
`;
