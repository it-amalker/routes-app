import React from 'react';
import { TravelModeProps } from '../types/props';

const TravelMode: React.FC<TravelModeProps> = ({ setTravelMode }) => {
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    if (value === 'driving' || value === 'walking' || value === 'bicycling') {
      setTravelMode(() => value);
    }
  };

  return (
    <form className="travel-mode-form">
      <select className="travel-mode" onChange={onChange}>
        <option value="driving">Driving</option>
        <option value="walking">Walking</option>
        <option value="bicycling">Bicycling</option>
      </select>
    </form>
  );
};

export default TravelMode;
