import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    width: 62px;
    height: 63px;
    left: 21px;
    top: 22px;
    z-index: 2;

    background-color: ${theme.colors.tertiary};
    backdrop-filter: blur(20px);
    border-radius: 18px;
    border: none;
  `}
`;

export const SportsButton = styled.button`
  position: absolute;
  width: 62px;
  height: 63px;
  left: 305px;
  top: 22px;
  background: rgba(34, 34, 67, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  border: none;
  z-index: 2;

  > img {
    filter: brightness(0) invert(1);
  }
`;

export const CardImage = styled.img`
  ${({ src }) => css`
    position: absolute;
    width: 100%;
    height: auto;
    left: 0px;
    top: 0px;
    background: url(${src});
    margin: 0;
  `}
`;

export const CardTitleContainer = styled.div`
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
`;

export const CardTitle = styled.div`
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
`;

export const ContainerButtons = styled.div`
  position: absolute;
  top: 73%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LikeButton = styled.button`
  position: relative;
  width: 81px;
  height: 81px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  touch-action: none;
  align-self: center;
  margin: 0 20px;
`;

export const DisLikeButton = styled.button`
  position: relative;
  width: 51px;
  height: 51px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background: #222243;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  touch-action: none;
  align-self: center;
  margin: 0 20px;
`;

export const SportCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
