import { GoogleMap } from '@react-google-maps/api';

export interface SetZoomType extends GoogleMap {
  setZoom: (zoom: number) => void;
}
