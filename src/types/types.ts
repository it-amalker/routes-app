import { MarkerType } from './marker';

export type ReverseGeocodeFunction = (
  lat: string,
  lng: string,
  cb: (address: string) => void,
) => Promise<void>;

export type DnDStateType = {
  draggedFrom: number | null;
  draggedTo: number | null;
  isDragging: boolean;
  originalOrder: MarkerType[];
  updatedOrder: MarkerType[];
};
