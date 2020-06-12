import React, { useState, useCallback, useRef } from 'react';
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { uniqueId } from 'lodash';
import Geocode from 'react-geocode';
import Search from './Search';
import mapStyles from '../../map-styles/mapStyles';
import { SetZoomType } from '../interfaces/mapZoom';
import { MarkerType } from '../types/marker';
import { ReverseGeocodeFunction } from '../types/types';
import { EventClickType } from '../types/events';
import { MapProps } from '../types/props';
import Directions from './Directions';

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);

const maxMarkersOnMap = 5;

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultLocation = {
  // Moscow
  lat: 55.751244,
  lng: 37.618423,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const reverseGeocode: ReverseGeocodeFunction = async (lat, lng, cb) => {
  try {
    const response = await Geocode.fromLatLng(lat, lng);
    const address = await response.results[0].formatted_address
      .split(',')
      .slice(0, -1)
      .join(',');
    cb(address);
  } catch (error) {
    console.error(error);
  }
};

const Map: React.FC<MapProps> = ({ markers, setMarker }) => {
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

  const onMapClick = useCallback(
    (e: EventClickType): void => {
      const createMarker = (address: string) => {
        setMarker((current) => {
          if (current.length < maxMarkersOnMap) {
            return [
              ...current,
              {
                id: uniqueId('marker-'),
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                address,
              },
            ];
          }
          console.log(current);
          return current;
        });
      };
      reverseGeocode(
        String(e.latLng.lat()),
        String(e.latLng.lng()),
        createMarker,
      );
    },
    [setMarker],
  );

  const onMarkerDrag = useCallback(
    (marker: MarkerType) => (e: EventClickType): void => {
      const updateMarker = (address: string) => {
        const updatedMarker = {
          id: marker.id,
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          address,
        };
        setMarker((current) => {
          const newMarkersState = current.map((m) =>
            m.id === marker.id ? updatedMarker : m,
          );
          return newMarkersState;
        });
      };
      reverseGeocode(
        String(e.latLng.lat()),
        String(e.latLng.lng()),
        updateMarker,
      );
    },
    [setMarker],
  );

  const renderWindowInfo = (): JSX.Element => (
    <InfoWindow
      position={{ lat: selectedMarker!.lat, lng: selectedMarker!.lng }}
      onCloseClick={(): void => setSelectedMarker(null)}
    >
      <div>
        <h3>Address</h3>
        <p>{selectedMarker!.address}</p>
      </div>
    </InfoWindow>
  );

  const renderMap = (): JSX.Element => {
    return (
      <>
        <Search navigateTo={navigateTo} />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={defaultLocation}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker, i) => (
            <Marker
              key={marker.id}
              label={`${i + 1}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              draggable
              onDragEnd={onMarkerDrag(marker)}
              onClick={(): void => setSelectedMarker(marker)}
            />
          ))}
          {selectedMarker ? renderWindowInfo() : null}
          {markers.length > 1 ? (
            <Directions
              places={markers}
              travelMode={google.maps.TravelMode.DRIVING}
            />
          ) : null}
        </GoogleMap>
      </>
    );
  };

  if (loadError) {
    return <span>Map cannot be loaded right now, please try later</span>;
  }

  return isLoaded ? renderMap() : <span>Loading maps</span>;
};

export default Map;
