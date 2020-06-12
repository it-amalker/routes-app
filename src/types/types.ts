export type ReverseGeocodeFunction = (
  lat: string,
  lng: string,
  cb: (address: string) => void,
) => Promise<void>;
