import React from 'react';
import { TravelModeProps } from '../../types/props';
import { TravelModeForm, TravelModes } from './TravelMode.styles';

const TravelMode: React.FC<TravelModeProps> = ({ setTravelMode }) => {
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    if (value === 'driving' || value === 'walking' || value === 'bicycling') {
      setTravelMode(() => value);
    }
  };

  return (
    <TravelModeForm>
      <TravelModes onChange={onChange}>
        <option value="driving">Driving</option>
        <option value="walking">Walking</option>
        <option value="bicycling">Bicycling</option>
      </TravelModes>
    </TravelModeForm>
  );
};

export default TravelMode;
