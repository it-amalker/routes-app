import styled from 'styled-components';

export const TravelModeForm = styled.form`
  position: absolute;
  top: 1rem;
  left: 5%;

  z-index: 5;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    top: 0.9rem;
  }

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    top: 0.8rem;
  }
`;

export const TravelModes = styled.select`
  height: 2.84375rem;

  font: inherit;

  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.main};

  box-sizing: border-box;

  cursor: pointer;
`;
