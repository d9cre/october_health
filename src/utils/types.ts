// Purpose: Define types for the weather service.
export type Weather = {
  name: string;
  weather: {
    icon: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
  };
  sys: {
    country: string;
  };
};
