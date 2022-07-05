import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import { fetchLocation } from "../../services/fetchService";

const Locator = () => {
  //Zustand hook alias
  const setLocation = useStore((state) => state.setLocation);
  const setCoords = useStore((state) => state.setCoords);
  const coords = useStore((state) => state.coords);

  const coordsEffect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoords, (error) => {
        console.log(error);
      });
    }
  };

  const locationEffect = () => {
    if (coords.latitude) {
      fetchLocation(coords.latitude, coords.longitude)
        .then((data) => {
          setLocation({
            country: data.country,
            state: data.state,
            city: data.city,
            district: data.district,
            municipality: data.municipality,
          });
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(coordsEffect, []);
  useEffect(locationEffect, [coords.latitude]);

  return <></>;
};

export default Locator;
