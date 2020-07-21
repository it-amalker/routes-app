import styled from 'styled-components';
import { ComboboxInput } from '@reach/combobox';

export const SearchContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;

  width: 18rem;

  margin: 0 auto;

  z-index: 5;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    top: 0.9rem;

    width: 16rem;
  }

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    top: 0.8rem;

    width: 12rem;
  }
`;

export const Input = styled(ComboboxInput)`
  width: 100%;
  padding: 0.625rem;

  font: inherit;

  border: 2px solid ${({ theme }) => theme.colors.main};

  box-sizing: border-box;
`;
