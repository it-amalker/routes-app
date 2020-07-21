import React, { useRef } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxPopover,
  ComboboxOption,
  ComboboxList,
} from '@reach/combobox';
import { SearchContainer, Input } from './Search.styles';

import { SearchProps } from '../../types/props';

const Search: React.FC<SearchProps> = ({ navigateTo }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const inputElRef = useRef<HTMLInputElement | null>(null);

  return (
    <SearchContainer>
      <Combobox
        onSelect={async (location): Promise<void | Error> => {
          setValue(location, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address: location });
            const { lat, lng } = await getLatLng(results[0]);
            navigateTo(lat, lng);
          } catch (error) {
            console.log('😱 Error: ', error);
          }
        }}
      >
        <Input
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter location"
        />
        <ComboboxPopover ref={inputElRef}>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </SearchContainer>
  );
};

export default Search;
