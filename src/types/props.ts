import { MarkerType } from './marker';

export type SearchProps = {
  navigateTo: (lat: number, lng: number) => void;
};

type PrevMarkersState = (markers: MarkerType[]) => MarkerType[];

export type MapProps = {
  markers: MarkerType[];
  setMarker: (f: PrevMarkersState) => void;
};

export type DirectionsProps = {
  places: MarkerType[];
  travelMode: google.maps.TravelMode;
};
