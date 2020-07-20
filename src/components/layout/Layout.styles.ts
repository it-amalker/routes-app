import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  overflow: hidden;
`;
