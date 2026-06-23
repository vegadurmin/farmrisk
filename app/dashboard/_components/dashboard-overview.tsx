import {
  Brain,
  CalendarDays,
  CloudSun,
  Sparkles,
  Sprout,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { content } from "@/app/constants/content";
import {
  aiOverview,
  forecast16Day,
  hourlyWeather,
} from "../_data/dashboard-data";
import { VillageLocationPicker } from "./village-location-picker";

function SectionCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-lg border border-emerald-950/10 bg-white shadow-sm shadow-emerald-950/5 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  action,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
          <Icon className="size-4" />
        </span>
        <h2 className="truncate text-base font-semibold text-slate-950">
          {title}
        </h2>
      </div>
      {action ? (
        <span className="text-xs font-medium text-emerald-700">{action}</span>
      ) : null}
    </div>
  );
}

function HourlyWeatherBlock() {
  return (
    <SectionCard className="lg:col-span-8">
      <SectionHeader icon={CloudSun} title="Hourly Weather" action="Today" />
      <div className="overflow-x-auto p-5">
        <div className="grid min-w-[720px] grid-cols-6 gap-3">
          {hourlyWeather.map((hour) => {
            const Icon = hour.icon;

            return (
              <div
                key={hour.time}
                className="rounded-lg border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {hour.time}
                  </span>
                  <Icon className="size-5 text-amber-500" />
                </div>
                <p className="mt-4 text-2xl font-semibold text-slate-950">
                  {hour.temp} C
                </p>
                <p className="mt-1 min-h-9 text-sm leading-5 text-slate-600">
                  {hour.condition}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{hour.rainChance}% rain</span>
                  <span>{hour.windKph} km/h</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}

function AiOverviewBlock() {
  return (
    <SectionCard className="lg:col-span-4">
      <SectionHeader icon={Brain} title="AI Overview" action="Mock signal" />
      <div className="space-y-5 p-5">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-emerald-800">
                Risk level
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-950">
                {aiOverview.riskLevel}
              </p>
            </div>
            <div className="flex size-16 items-center justify-center rounded-full border-4 border-emerald-200 bg-white text-lg font-semibold text-emerald-800">
              {aiOverview.score}
            </div>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-600">{aiOverview.summary}</p>

        <div className="space-y-3">
          {aiOverview.recommendations.map((item) => (
            <div key={item} className="flex gap-3 text-sm text-slate-700">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

function ForecastBlock() {
  return (
    <SectionCard className="lg:col-span-8">
      <SectionHeader
        icon={CalendarDays}
        title="16 Day Forecast"
        action="Planning window"
      />
      <div className="max-h-[460px] overflow-y-auto p-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {forecast16Day.map((day) => {
            const Icon = day.icon;

            return (
              <div
                key={`${day.day}-${day.date}`}
                className="rounded-lg border border-slate-100 bg-white p-4 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {day.day}
                    </p>
                    <p className="text-xs text-slate-500">{day.date}</p>
                  </div>
                  <Icon className="size-5 text-amber-500" />
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-2xl font-semibold text-slate-950">
                    {day.high} C
                  </span>
                  <span className="pb-1 text-sm text-slate-500">
                    / {day.low} C
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{day.condition}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-400"
                    style={{ width: `${day.rainChance}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {day.rainChance}% rain chance
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}

function WorkQueueSkeleton() {
  return (
    <SectionCard className="lg:col-span-4">
      <SectionHeader icon={Sprout} title="Farm Tasks" action="Coming next" />
      <div className="space-y-4 p-5">
        {["Irrigation schedule", "Field health table", "Sensor alerts"].map(
          (label) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
            >
              <Skeleton className="size-10 rounded-md bg-emerald-100" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-700">{label}</p>
                <Skeleton className="mt-2 h-2.5 w-3/4 bg-slate-100" />
              </div>
            </div>
          ),
        )}
      </div>
    </SectionCard>
  );
}

export function DashboardOverview() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
      <header className="flex flex-col justify-between gap-4 rounded-lg border border-emerald-950/10 bg-white p-5 shadow-sm shadow-emerald-950/5 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">
            {content.title} dashboard
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Good morning, Rakesh.
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
            Village-level weather and field risk signals for today.
          </p>
        </div>
        <div className="rounded-lg bg-emerald-50 px-4 py-3 text-right">
          <p className="text-sm font-medium text-emerald-950">
            Tuesday, 23 June 2026
          </p>
          <p className="text-xs text-emerald-700">06:30 AM local snapshot</p>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-12">
        <VillageLocationPicker />
        <HourlyWeatherBlock />
        <AiOverviewBlock />
        <ForecastBlock />
        <WorkQueueSkeleton />
      </div>
    </div>
  );
}
