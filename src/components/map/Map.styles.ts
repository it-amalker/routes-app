import styled from 'styled-components';

export const MapContainer = styled.section`
  position: relative;

  width: 65%;
  height: 100vh;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    order: 1;

    width: 100%;
    height: 50vh;
  }
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.standard};
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.35rem;
`;

export const Address = styled.p`
  margin: 0;
`;
