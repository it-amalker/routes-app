import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
  ComboboxList,
} from '@reach/combobox';

import { SearchProps } from '../types/props';

const Search: React.FC<SearchProps> = ({ navigateTo }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  return (
    <div className="search">
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
        <ComboboxInput
          className="search-input"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
