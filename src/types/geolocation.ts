export type Position = {
  lat: number;
  lng: number;
};

export type PositionError = {
  message: string | null;
};

type GeolocationCoordinates = {
  accuracy: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  latitude: number;
  longitude: number;
  speed?: number | null;
};

type GeolocationCallbackResponse = {
  coords: GeolocationCoordinates;
  timestamp: number;
};

export type PositionCallback = (position: GeolocationCallbackResponse) => void;
export type PositionErrorCallback = (error: {
  message: string;
  code: number;
}) => void;
