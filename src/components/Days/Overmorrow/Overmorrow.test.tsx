import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useStore } from "../../../store/store";
import Overmorrow from "./Overmorrow";

const coldForecast = {
  today: {
    temp: 10,
    humidity: 60,
    pressure: 1250,
    windSpeed: 60,
    windDirection: 180,
    weather: { icon: "code01d", main: "Clear" },
  },
  tomorrow: {
    temp: {
      max: 15,
      min: 10,
    },
    weather: { icon: "code09d", main: "Rain" },
  },
  afterTomorrow: {
    temp: {
      max: 15,
      min: 10,
    },
    weather: { icon: "code09d", main: "Rain" },
  },
};

const warmForecast = {
  today: {
    temp: 30,
    humidity: 60,
    pressure: 1250,
    windSpeed: 60,
    windDirection: 180,
    weather: { icon: "code01d", main: "Clear" },
  },
  tomorrow: {
    temp: {
      max: 15,
      min: 10,
    },
    weather: { icon: "code09d", main: "Rain" },
  },
  afterTomorrow: {
    temp: {
      max: 15,
      min: 10,
    },
    weather: { icon: "code09d", main: "Rain" },
  },
};

const hotForecast = {
  today: {
    temp: 40,
    humidity: 60,
    pressure: 1250,
    windSpeed: 60,
    windDirection: 180,
    weather: { icon: "code01d", main: "Clear" },
  },
  tomorrow: {
    temp: {
      max: 15,
      min: 10,
    },
    weather: { icon: "code09d", main: "Rain" },
  },
  afterTomorrow: {
    temp: {
      max: 15,
      min: 10,
    },
    weather: { icon: "code09d", main: "Rain" },
  },
};

const originalState = useStore.getState();
beforeEach(() => {
  useStore.setState(originalState);
});

it("should render in blue when cold", () => {
  const setTheme = renderHook(() => useStore((state) => state.setGlobalTheme));
  const setForecast = renderHook(() => useStore((state) => state.setForecast));
  act(() => {
    setTheme.result.current(coldForecast.today.temp);
    setForecast.result.current(coldForecast);
  });

  render(<Overmorrow />);
  //We check for the role because both it and the style class pull from the same place
  expect(screen.getByRole("blue")).toBeInTheDocument();
});

it("should render in yellow when warm", () => {
  const setTheme = renderHook(() => useStore((state) => state.setGlobalTheme));
  const setForecast = renderHook(() => useStore((state) => state.setForecast));
  act(() => {
    setTheme.result.current(warmForecast.today.temp);
    setForecast.result.current(warmForecast);
  });

  render(<Overmorrow />);
  //We check for the role because both it and the style class pull from the same place
  expect(screen.getByRole("yellow")).toBeInTheDocument();
});

it("should render in red when hot", () => {
  const setTheme = renderHook(() => useStore((state) => state.setGlobalTheme));
  const setForecast = renderHook(() => useStore((state) => state.setForecast));
  act(() => {
    setTheme.result.current(hotForecast.today.temp);
    setForecast.result.current(hotForecast);
  });

  render(<Overmorrow />);
  //We check for the role because both it and the style class pull from the same place
  expect(screen.getByRole("red")).toBeInTheDocument();
});
