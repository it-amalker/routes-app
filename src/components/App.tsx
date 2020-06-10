import React, { useState } from 'react';
import Map from './Map';
import { MarkerType } from '../types/marker';

const App: React.FC = () => {
  const [markers, setMarker] = useState<MarkerType[]>([]);

  return (
    <>
      <div className="routes-container">Some data</div>
      <div className="map-container">
        <Map markers={markers} setMarker={setMarker} />
      </div>
    </>
  );
};

export default App;
