import React from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import mapStyles from '../styles/mapStyles';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const defaultLocation = {
  lat: 55.751244,
  lng: 37.618423,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const App: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const renderMap = (): JSX.Element => {
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={defaultLocation}
          options={options}
        />
      </div>
    );
  };

  if (loadError) {
    return <span>Map cannot be loaded right now, please try later</span>;
  }
  return isLoaded ? renderMap() : <span>Loading maps</span>;
};

export default App;
