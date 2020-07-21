import styled from 'styled-components';
import { ComboboxInput } from '@reach/combobox';

export const SearchContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: calc(50% - 150px);

  z-index: 5;
`;

export const Input = styled(ComboboxInput)`
  width: 300px;
  padding: 0.625rem;

  border: 2px solid ${({ theme }) => theme.colors.main};
`;
