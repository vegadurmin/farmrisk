import {
  CloudDrizzle,
  CloudSun,
  LucideIcon,
  Sun,
  Wind,
} from "lucide-react";

export type HourlyWeather = {
  time: string;
  temp: number;
  condition: string;
  rainChance: number;
  windKph: number;
  icon: LucideIcon;
};

export type ForecastDay = {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
  rainChance: number;
  icon: LucideIcon;
};

export const villages = [
  "Dholka, Ahmedabad",
  "Sanand, Ahmedabad",
  "Kadi, Mehsana",
  "Bavla, Ahmedabad",
  "Viramgam, Ahmedabad",
];

export const selectedVillage = {
  name: "Dholka, Ahmedabad",
  coordinates: "22.7274 N, 72.4411 E",
  lastSynced: "06:30 AM",
  latitude: 22.7274,
  longitude: 72.4411,
};

export const hourlyWeather: HourlyWeather[] = [
  {
    time: "07 AM",
    temp: 26,
    condition: "Clear",
    rainChance: 4,
    windKph: 8,
    icon: Sun,
  },
  {
    time: "09 AM",
    temp: 29,
    condition: "Sunny",
    rainChance: 5,
    windKph: 10,
    icon: Sun,
  },
  {
    time: "11 AM",
    temp: 32,
    condition: "Partly cloudy",
    rainChance: 8,
    windKph: 12,
    icon: CloudSun,
  },
  {
    time: "01 PM",
    temp: 34,
    condition: "Dry heat",
    rainChance: 6,
    windKph: 14,
    icon: Sun,
  },
  {
    time: "03 PM",
    temp: 33,
    condition: "Clouds building",
    rainChance: 18,
    windKph: 16,
    icon: CloudSun,
  },
  {
    time: "05 PM",
    temp: 30,
    condition: "Light breeze",
    rainChance: 15,
    windKph: 12,
    icon: Wind,
  },
];

export const aiOverview = {
  riskLevel: "Moderate",
  score: 72,
  summary:
    "Irrigation should be scheduled before noon. Afternoon heat stress is likely on exposed plots, while rainfall risk stays low for the next 24 hours.",
  recommendations: [
    "Prioritize drip irrigation for cotton and wheat blocks.",
    "Scout low-lying fields for early pest pressure after sunset.",
    "Delay fertilizer spray until wind drops below 12 km/h.",
  ],
};

export const forecast16Day: ForecastDay[] = [
  {
    day: "Today",
    date: "Jun 23",
    high: 34,
    low: 25,
    condition: "Sunny",
    rainChance: 8,
    icon: Sun,
  },
  {
    day: "Wed",
    date: "Jun 24",
    high: 35,
    low: 26,
    condition: "Hot",
    rainChance: 6,
    icon: Sun,
  },
  {
    day: "Thu",
    date: "Jun 25",
    high: 33,
    low: 25,
    condition: "Cloudy",
    rainChance: 22,
    icon: CloudSun,
  },
  {
    day: "Fri",
    date: "Jun 26",
    high: 31,
    low: 24,
    condition: "Showers",
    rainChance: 48,
    icon: CloudDrizzle,
  },
  {
    day: "Sat",
    date: "Jun 27",
    high: 30,
    low: 24,
    condition: "Showers",
    rainChance: 55,
    icon: CloudDrizzle,
  },
  {
    day: "Sun",
    date: "Jun 28",
    high: 32,
    low: 25,
    condition: "Humid",
    rainChance: 30,
    icon: CloudSun,
  },
  {
    day: "Mon",
    date: "Jun 29",
    high: 33,
    low: 26,
    condition: "Sunny",
    rainChance: 14,
    icon: Sun,
  },
  {
    day: "Tue",
    date: "Jun 30",
    high: 34,
    low: 26,
    condition: "Sunny",
    rainChance: 10,
    icon: Sun,
  },
  {
    day: "Wed",
    date: "Jul 01",
    high: 32,
    low: 25,
    condition: "Cloudy",
    rainChance: 28,
    icon: CloudSun,
  },
  {
    day: "Thu",
    date: "Jul 02",
    high: 31,
    low: 24,
    condition: "Rain",
    rainChance: 62,
    icon: CloudDrizzle,
  },
  {
    day: "Fri",
    date: "Jul 03",
    high: 30,
    low: 24,
    condition: "Rain",
    rainChance: 66,
    icon: CloudDrizzle,
  },
  {
    day: "Sat",
    date: "Jul 04",
    high: 31,
    low: 24,
    condition: "Cloudy",
    rainChance: 40,
    icon: CloudSun,
  },
  {
    day: "Sun",
    date: "Jul 05",
    high: 32,
    low: 25,
    condition: "Warm",
    rainChance: 24,
    icon: Sun,
  },
  {
    day: "Mon",
    date: "Jul 06",
    high: 33,
    low: 25,
    condition: "Sunny",
    rainChance: 18,
    icon: Sun,
  },
  {
    day: "Tue",
    date: "Jul 07",
    high: 34,
    low: 26,
    condition: "Hot",
    rainChance: 12,
    icon: Sun,
  },
  {
    day: "Wed",
    date: "Jul 08",
    high: 33,
    low: 26,
    condition: "Partly cloudy",
    rainChance: 20,
    icon: CloudSun,
  },
];
