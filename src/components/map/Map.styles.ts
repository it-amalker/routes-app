import styled from 'styled-components';

export const MapContainer = styled.section`
  position: relative;

  width: 65%;
  min-width: 555px;
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
