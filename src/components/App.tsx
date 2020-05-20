import React, { useState, useCallback, useRef } from 'react';
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { uniqueId } from 'lodash';
import Search from './Search';
import mapStyles from '../styles/mapStyles';

const maxMarkersNumber = 5;

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

type MarkerType = { lat: number; lng: number; id: string };

type EventClickType = {
  latLng: {
    lat: () => number;
    lng: () => number;
  };
};

interface SetZoomType extends GoogleMap {
  setZoom: (zoom: number) => void;
}

const App: React.FC = () => {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const mapRef = useRef<SetZoomType | null>(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const navigateTo = useCallback((lat: number, lng: number): void => {
    mapRef.current!.panTo({ lat, lng });
    mapRef.current!.setZoom(12);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const onMapClick = useCallback((e: EventClickType): void => {
    setMarkers((current) => {
      if (current.length < maxMarkersNumber) {
        return [
          ...current,
          {
            id: uniqueId('marker-'),
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          },
        ];
      }
      return current;
    });
  }, []);

  const onMarkerDrag = useCallback(
    (marker: MarkerType) => (e: EventClickType): void => {
      const updatedMarker = {
        id: marker.id,
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      setMarkers((current) => {
        const newMarkersState = current.map((m) =>
          m.id === marker.id ? updatedMarker : m,
        );
        return newMarkersState;
      });
    },
    [],
  );

  const renderMrkWindowInfo = (): JSX.Element => (
    <InfoWindow
      position={{ lat: selectedMarker!.lat, lng: selectedMarker!.lng }}
      onCloseClick={(): void => setSelectedMarker(null)}
    >
      <div>
        <h3>Marker title</h3>
        <p>
          Lat:
          {selectedMarker!.lat}
        </p>
        <p>
          Lng:
          {selectedMarker!.lng}
        </p>
      </div>
    </InfoWindow>
  );

  const renderMap = (): JSX.Element => {
    return (
      <div>
        <Search navigateTo={navigateTo} />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={defaultLocation}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              draggable
              onDragEnd={onMarkerDrag(marker)}
              onClick={(): void => setSelectedMarker(marker)}
            />
          ))}
          {selectedMarker ? renderMrkWindowInfo() : null}
        </GoogleMap>
      </div>
    );
  };

  if (loadError) {
    return <span>Map cannot be loaded right now, please try later</span>;
  }
  return isLoaded ? renderMap() : <span>Loading maps</span>;
};

export default App;
