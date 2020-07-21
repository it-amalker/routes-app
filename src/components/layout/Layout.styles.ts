import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  color: ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    min-width: 420px;
  }
`;

export default Main;
