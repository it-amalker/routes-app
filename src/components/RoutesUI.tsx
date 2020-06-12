import React from 'react';

import { MarkerType } from '../types/marker';

type RoutesUIProps = {
  markers: MarkerType[];
};

const RoutesUI: React.FC<RoutesUIProps> = ({ markers }) => {
  return (
    <ul className="routes-list">
      {markers.map((m) => (
        <li key={m.id} className="route">
          {m.address}
        </li>
      ))}
    </ul>
  );
};

export default RoutesUI;
