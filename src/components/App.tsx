import React, { useState } from 'react';
import Map from './Map';
import RoutesUI from './RoutesUI';
import { MarkerType } from '../types/marker';

const App: React.FC = () => {
  const [markers, setMarker] = useState<MarkerType[]>([]);

  return (
    <>
      <div className="routes-container">
        <RoutesUI markers={markers} />
      </div>
      <div className="map-container">
        <Map markers={markers} setMarker={setMarker} />
      </div>
    </>
  );
};

export default App;
