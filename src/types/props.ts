import { MarkerType } from './marker';
import { TravelModeType } from './types';

export type SearchProps = {
  navigateTo: (lat: number, lng: number) => void;
};

type PrevMarkersState = (markers: MarkerType[]) => MarkerType[];
type PrevRouteNotFoundState = (prev: boolean) => boolean;

export type MapProps = {
  markers: MarkerType[];
  setMarker: (f: PrevMarkersState) => void;
  setRouteNotFound: (f: PrevRouteNotFoundState) => void;
};

export type DirectionsProps = {
  places: MarkerType[];
  travelMode: google.maps.TravelMode;
  setRouteNotFound: (f: PrevRouteNotFoundState) => void;
};

export type RoutesUIProps = {
  markers: MarkerType[];
  setMarker: (f: PrevMarkersState) => void;
  removeMarker: (id: string) => () => void;
};

type PrevTravelModeState = (travelMode: TravelModeType) => TravelModeType;

export type TravelModeProps = {
  setTravelMode: (f: PrevTravelModeState) => void;
};
