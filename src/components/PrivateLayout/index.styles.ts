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
    border-radius: 32px;
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
