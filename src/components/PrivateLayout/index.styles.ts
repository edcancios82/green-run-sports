import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.secondary};
    width: 100%;
    height: 100vh;
    padding: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  `}
`;

export const ThemeButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 62px;
    height: 63px;
    left: 21px;
    top: 22px;

    background-color: ${theme.colors.tertiary};
    backdrop-filter: blur(20px);
    border-radius: 18px;
  `}
`;

export const SportsButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 62px;
    height: 63px;
    left: 305px;
    top: 22px;
    background: rgba(34, 34, 67, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 18px;
  `}
`;

export const CardImage = styled.img`
  ${({ theme, src }) => css`
    position: absolute;
    width: 100%;
    height: auto;
    left: 0px;
    top: 0px;
    background: url(${src});
  `}
`;

export const CardTitleContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 464px;

    background: linear-gradient(
      360deg,
      #000000 0%,
      #000000 58.85%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 0px 0px 32px 32px;
  `}
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 48px;
    left: 21px;
    top: 490px;

    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;

    display: flex;
    align-items: center;

    color: #fefefe;
  `}
`;

export const LikeButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 48.97%;
    top: 72.39%;
    bottom: 18.01%;
    width: 81px;
    height: 81px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
    box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  `}
`;

export const DisLikeButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 30.26%;

    top: 74.17%;
    bottom: 19.79%;
    width: 51px;
    height: 51px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    background: #222243;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  `}
`;

export const HomeButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 59px;
    height: 59px;
    left: 33px;
    top: 752px;

    background-color: ${theme.colors.main};
    border-radius: 16px;
    border: none;
  `}
`;

export const HistoryButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 59px;
    height: 59px;
    left: 120px;
    top: 752px;

    background-color: ${theme.colors.main};
    border-radius: 16px;
    border: none;
  `}
`;

export const NotesButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 59px;
    height: 59px;
    left: 207px;
    top: 752px;

    background-color: ${theme.colors.main};
    border-radius: 16px;
    border: none;
  `}
`;

export const ProfileButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 59px;
    height: 59px;
    left: 294px;
    top: 752px;

    background-color: ${theme.colors.main};
    border-radius: 16px;
    border: none;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 347px;
    height: 85px;
    left: 21px;
    top: 739px;

    background-color: ${theme.colors.tertiary};
    border-radius: 24px;
  `}
`;
