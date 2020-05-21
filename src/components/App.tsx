import React, { useState } from 'react';
import Map from './Map';
import { MarkerType } from '../types/marker';

const App: React.FC = () => {
  const [markers, setMarker] = useState<MarkerType[]>([]);

  return (
    <div>
      <Map markers={markers} setMarker={setMarker} />
    </div>
  );
};

export default App;
