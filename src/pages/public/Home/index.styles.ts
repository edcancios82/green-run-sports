import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.secondary};
  `}
`;
