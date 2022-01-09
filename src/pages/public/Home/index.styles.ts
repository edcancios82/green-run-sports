import styled, { css } from "styled-components";

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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

export const SideContainer = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    height: 300px;
    position: absolute;
    top: calc(100% - 300px);
    padding: 30px 20px;
    text-align: left;
    border-radius: 30px;

    h2 {
      margin: 0;
      width: 80%;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
    }

    p {
      width: 80%;
      font-family: Epilogue;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      opacity: 0.8;
    }

    button {
      width: 122px;
      height: 66px;
      color: #fff;
      background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
      box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
      border-radius: 25px;
      border: none;
    }
  `}
`;
