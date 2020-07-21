import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  color: ${({ theme }) => theme.colors.secondary};
`;

export default Main;
