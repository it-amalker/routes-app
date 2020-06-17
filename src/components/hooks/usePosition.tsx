import { useState, useEffect } from 'react';
import {
  Position,
  PositionError,
  PositionCallback,
  PositionErrorCallback,
} from '../../types/geolocation';

const usePosition = (): [Position, PositionError] => {
  // Default Moscow position
  const [position, setPosition] = useState<Position>({
    lat: 55.751244,
    lng: 37.618423,
  });
  const [error, setError] = useState<PositionError>({ message: null });

  const getLocation: PositionCallback = ({ coords }) => {
    setPosition(() => ({ lat: coords.latitude, lng: coords.longitude }));
    setError(() => ({ message: null }));
  };

  const onError: PositionErrorCallback = ({ message }) => {
    setError(() => ({ message }));
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError(() => ({ message: 'Geolocation is not supported!' }));
    } else {
      navigator.geolocation.getCurrentPosition(getLocation, onError);
    }
  }, []);

  return [position, error];
};

export default usePosition;
