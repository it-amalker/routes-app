import React, { useState } from 'react';
import Map from './Map';
import RoutesUI from './RoutesUI';
import { MarkerType } from '../types/marker';

const App: React.FC = () => {
  const [markers, setMarker] = useState<MarkerType[]>([]);

  const removeMarker = (id: string) => () => {
    const updatedMarkers = markers.filter((m) => m.id !== id);
    setMarker(() => updatedMarkers);
  };

  return (
    <>
      <div className="routes-container">
        <h1 className="app-title">Routes app</h1>
        <p className="routes-info">Move blocks to adjust the route:</p>
        <RoutesUI
          markers={markers}
          setMarker={setMarker}
          removeMarker={removeMarker}
        />
      </div>
      <div className="map-container">
        <Map markers={markers} setMarker={setMarker} />
      </div>
    </>
  );
};

export default App;
