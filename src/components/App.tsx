import React, { useState } from 'react';
import Map from './map';
import RoutesUI from './routesUI';
import { MarkerType } from '../types/marker';
import Layout from './layout';

const App: React.FC = () => {
  const [markers, setMarker] = useState<MarkerType[]>([]);
  const [routeNotFound, setRouteNotFound] = useState(false);

  const removeMarker = (id: string) => () => {
    const updatedMarkers = markers.filter((m) => m.id !== id);
    setMarker(() => updatedMarkers);
  };

  return (
    <Layout>
      <RoutesUI
        markers={markers}
        setMarker={setMarker}
        removeMarker={removeMarker}
        routeNotFound={routeNotFound}
      />
      <Map
        markers={markers}
        setMarker={setMarker}
        setRouteNotFound={setRouteNotFound}
      />
    </Layout>
  );
};

export default App;
