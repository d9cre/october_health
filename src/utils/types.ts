// Purpose: Define types for the weather service.
export type Weather = {
  weather: {
    icon: string;
    description: string;
  }[];
  temp: number;
};
