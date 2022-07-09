export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

export type Location = {
  country: string;
  state: string;
  city?: string;
  municipality?: string;
  district?: string;
};

export type BackgroundImage = {
  url: string;
  altText: string;
};

export type Forecast = {
  today: {
    temp: number;
    humidity?: number;
    pressure?: number;
    windSpeed?: number;
    windDirection?: number;
    weather: { icon: string; main: string };
  };
  tomorrow: {
    temp: {
      max: number;
      min: number;
    };
    weather: { icon: string; main: string };
  };
  afterTomorrow: {
    temp: {
      max: number;
      min: number;
    };
    weather: { icon: string; main: string };
  };
};
