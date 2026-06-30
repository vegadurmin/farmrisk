"use client";

import React from "react";
import AIOverview from "./AIOverview";
import { LocationSearchBar } from "./LocationSearchBar";
import Forcast from "./Forcast";
import Lightning from "./Lightning";
import HourlyWeather from "./HourlyWeather";
import SoilMoisture from "./SoilMoisture";
import Weather from "./Weather";
import { useWeather } from "@/hooks/use-weather";
import { useLocationContext } from "@/providers/LocationProvider";
import { useLanguage } from "@/hooks/use-language";

export function getAIAdvisory(
  cropId: string,
  locationName: string,
  weatherTemp: number | undefined,
  language: string,
): string {
  const text =
    "Mock advisory text for crop: " +
    cropId +
    ", location: " +
    locationName +
    ", temperature: " +
    (weatherTemp ?? "N/A") +
    ", language: " +
    language +
    " IMPLEMENT MODEL HERE";
  return text;
}

const Overview = () => {
  const { language } = useLanguage();
  const { location } = useLocationContext();
  const weatherData = useWeather();
  const { current } = weatherData;

  return (
    <div className="flex flex-col gap-4 w-full">
      <LocationSearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
        <div className="md:col-span-1 lg:col-span-1 flex">
          <Weather weatherData={weatherData} />
        </div>
        <div className="md:col-span-1 lg:col-span-2 flex">
          <AIOverview
            getAdvisory={(cropId) =>
              getAIAdvisory(cropId, location.name, current?.temp, language)
            }
          />
        </div>
      </div>

      <Forcast />
      <HourlyWeather />
      <SoilMoisture />
      <Lightning />
    </div>
  );
};

export default Overview;
