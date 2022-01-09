import styled, { css } from "styled-components";

interface ThemeProps {
  isDark: boolean;
}

interface LiProps extends ThemeProps {
  liked: boolean;
}

export const BackButton = styled.div<ThemeProps>`
  ${({ theme, isDark }) => css`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 32px;
    top: 54px;
    color: ${theme.colors.secondary};

    img {
      filter: invert(${isDark ? "1" : "0"});
    }
  `}
`;

export const ScreenTitle = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    width: 133px;
    height: 51px;
    left: 32px;
    top: 102px;

    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 122.02%;

    display: flex;
    align-items: center;
    letter-spacing: -0.055em;

    color: ${theme.colors.secondary};
  `}
`;

export const ScreenDescription = styled.p`
  ${({ theme }) => css`
    position: absolute;
    width: 325px;
    height: 54px;
    left: 32px;
    top: 161px;

    font-family: Epilogue;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;

    display: flex;
    align-items: center;

    color: ${theme.colors.secondary};

    opacity: 0.8;
  `}
`;

export const DateTitle = styled.p`
  ${({ theme }) => css`
    position: absolute;
    width: 325px;
    height: 21px;
    left: 32px;
    top: 223px;

    font-family: Epilogue;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    display: flex;
    align-items: center;

    color: ${theme.colors.secondary};

    opacity: 0.8;
  `}
`;

export const SportList = styled.ul`
  margin: 0;
  margin-top: 75%;
  padding: 0;
  overflow: auto;
  height: calc(100% - 270px);
  left: 0;
  width: 100%;
  overflow-x: hidden;
`;

export const SportItemList = styled.li<LiProps>`
  ${({ theme, liked, isDark }) => css`
    position: relative;
    display: flex;
    width: 98%;
    height: 77px;
    margin: 14px 0;
    background-color: ${theme.colors.primary};
    border-radius: 12px;
    list-style-type: none;

    > img {
      width: 258px;
      height: 77px;
      background: rgba(0, 0, 0, 0.51);
      border-radius: 12px;
      opacity: 0.7;
    }

    > div {
      width: calc(100% - 258px);
      display: flex;
      justify-content: center;
      padding: 0;

      > img {
        margin: ${liked ? "27px" : "30px"};
        width: ${liked ? "23.82px" : "19.43px"};
        height: ${liked ? "22.63px" : "19.43px"};
        filter: ${liked && isDark && "brightness(0)"}
          invert(${liked && isDark ? "1" : "0"});
      }
    }
  `}
`;

export const SportTitle = styled.h4`
  position: absolute;
  width: 100%;
  height: 29px;
  margin-left: 15px;
  margin-top: 24px;

  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 122.02%;
  
  display: flex;
  align-items: center;
  letter-spacing: -0.045em;

  color: white;
`;
