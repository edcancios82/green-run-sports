import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.secondary};
    width: 100%;
    max-width: 500px;
    height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    overflow: hidden;
    border-radius: 32px;

    @media only screen and (min-width: 500px) {
      border-radius: 0px;
    }
  `}
`;

export const Preview = styled.div`
    width: 100%;
    height: calc(100% - 115px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0;
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.tertiary};
    width: 95%;
    height: 85px;
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `}
`;

export const ActionButton = styled.button`
  ${({ theme }) => css`
    width: 59px;
    height: 59px;
    background-color: ${theme.colors.main};
    border-radius: 16px;
    border: none;
  `}
`;
