import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.secondary};
    width: 100%;
    max-width: 500px;
    height: 100%;
    padding: 0;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 30px 20px;
    text-align: left;
    border-radius: 30px;

    > h2 {
      position: absolute;
      height: 51px;
      top: 202px;
      margin: 0;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
    }

    > p {
      position: absolute;
      width: 250px;
      height: 54px;
      top: 230px;
      font-family: Epilogue;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      opacity: 0.8;
      text-align: center;
    }

    button {
      width: 122px;
      height: 66px;
      color: #fff;
      background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
      box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
      border-radius: 25px;
    }
  `}
`;

export const InputEmailContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 330px;
    height: 67px;
    top: 337px;
    background-color: ${theme.colors.tertiary};
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 18px;

    p {
      margin: 10px 0 0 10px;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
    }

    input {
      width: 300px;
      margin: 5px 0 0 10px;
      border: none;
      background-color: ${theme.colors.tertiary};
      color: ${theme.colors.secondary};
    }

    .focus-visible {
      outline: none;
    }
  `}
`;

export const InputPasswordContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 330px;
    height: 67px;
    height: 67px;
    top: 414px;

    background-color: ${theme.colors.tertiary};
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 18px;

    p {
      margin: 10px 0 0 10px;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
    }

    input {
      width: 300px;
      margin: 5px 0 0 10px;
      border: none;
      background-color: ${theme.colors.tertiary};
      color: ${theme.colors.secondary};
    }

    .focus-visible {
      outline: none;
    }
  `}
`;

export const CardFooter = styled.div`
  position: absolute;
  top: 510px;
  width: 100%;
  max-width: 320px;
  height: 300px;
  display: flex;
  flex-direction: column;

  > p {
    width: 168px;
    height: 20px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: rgba(35, 34, 50, 0.8);
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 22px 38px;
    width: 122px;
    height: 66px;
    background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
    box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
    border-radius: 25px;
    border: none;
  }
`;
