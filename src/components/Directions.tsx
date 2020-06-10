import React, { useState, useEffect } from 'react';
import { DirectionsRenderer } from '@react-google-maps/api';
import { MarkerType } from '../types/marker';

type DirectionsProps = {
  places: MarkerType[];
  travelMode: string;
};

const Directions: React.FC<DirectionsProps> = ({ places, travelMode }) => {
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const allWaypoints = places.map((p) => ({
      location: { lat: p.lat, lng: p.lng },
      stopover: false,
    }));

    const [origin, destination] = allWaypoints
      .filter((p, i, arr) => i === 0 || i === arr.length - 1)
      .map((p) => p.location);

    const waypoints = allWaypoints.filter(
      (p, i, arr) => i !== 0 && i !== arr.length - 1,
    );

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode,
        waypoints,
      },
      (result, status) => {
        console.log(result);
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          setError(result);
        }
      },
    );
  }, [places, travelMode]);

  if (error) {
    return <h1>{error}</h1>;
  }
  return directions && <DirectionsRenderer directions={directions} />;
};

export default Directions;
