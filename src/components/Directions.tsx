import React, { useState, useEffect } from 'react';
import { DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { DirectionsProps } from '../types/props';
import { DirectionsResponse, DirectionOptions } from '../types/directions';

const Directions: React.FC<DirectionsProps> = ({ places, travelMode }) => {
  const [directions, setDirections] = useState<DirectionsResponse | null>(null);

  const [
    directionOptions,
    setDirectionOptions,
  ] = useState<DirectionOptions | null>(null);

  useEffect(() => {
    const allWaypoints = places.map((p) => ({
      location: new google.maps.LatLng(p.lat, p.lng),
      stopover: false,
    }));

    const [origin, destination] = allWaypoints
      .filter((p, i, arr) => i === 0 || i === arr.length - 1)
      .map((p) => p.location);

    const waypoints = allWaypoints.filter(
      (p, i, arr) => i !== 0 && i !== arr.length - 1,
    );

    setDirectionOptions({
      origin,
      destination,
      waypoints,
      travelMode,
    });
  }, [places, travelMode]);

  const directionsCallback = (response: DirectionsResponse) => {
    console.log(response);
    if (response) {
      setDirections(() => response);
    }
    setDirectionOptions(null);
  };

  return (
    <>
      {directionOptions && (
        <DirectionsService
          options={{
            origin: directionOptions.origin,
            destination: directionOptions.destination,
            waypoints: directionOptions.waypoints,
            travelMode: directionOptions.travelMode,
          }}
          callback={directionsCallback}
        />
      )}
      {directions && (
        <DirectionsRenderer
          options={{ suppressMarkers: true }}
          directions={directions}
        />
      )}
    </>
  );
};

export default Directions;
