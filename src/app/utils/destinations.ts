export interface CityLocation {
  name: string;
  lat: number;
  lon: number;
}

export const FEATURED_CITIES: CityLocation[] = [
    { name: 'Madrid', lat: 40.4168, lon: -3.7038 },
    { name: 'Berlín', lat: 52.5200, lon: 13.4050 },
    { name: 'París', lat: 48.8566, lon: 2.3522 },
    { name: 'Nueva York', lat: 40.7128, lon: -74.0060 },
    { name: 'Roma', lat: 41.9028, lon: 12.4964 },
    { name: 'Londres', lat: 51.5074, lon: -0.1278 },
    { name: 'Lisboa', lat: 38.7223, lon: -9.1393 },
    { name: 'Viena', lat: 48.2082, lon: 16.3738 },
    { name: 'Tokio', lat: 35.6895, lon: 139.6917 },
    { name: 'Chicago', lat: 41.8781, lon: -87.6298 },
    { name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
    { name: 'Ámsterdam', lat: 52.3676, lon: 4.9041 },
    { name: 'San Francisco', lat: 37.7749, lon: -122.4194 },
    { name: 'Niza', lat: 43.7102, lon: 7.2620 },
    { name: 'Múnich', lat: 48.1351, lon: 11.5820 }
];