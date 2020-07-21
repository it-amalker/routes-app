import styled from 'styled-components';

export const TravelModeForm = styled.form`
  position: absolute;
  top: 1rem;
  left: 5%;

  z-index: 5;
`;

export const TravelModes = styled.select`
  height: 2.84375rem;

  font: inherit;

  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.main};

  box-sizing: border-box;

  cursor: pointer;
`;
