import { NextRequest } from "next/server";

type NominatimSearchItem = {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    village?: string;
    town?: string;
    city?: string;
    county?: string;
    state?: string;
    country?: string;
  };
};

function buildVillageLabel(item: NominatimSearchItem) {
  const parts = [
    item.address?.village ?? item.address?.town ?? item.address?.city,
    item.address?.county,
    item.address?.state,
  ].filter(Boolean);

  return parts.length ? parts.join(", ") : item.display_name;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("mode");

  if (mode === "search") {
    const query = searchParams.get("q")?.trim();

    if (!query) {
      return Response.json({ results: [] });
    }

    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("limit", "8");
    url.searchParams.set("countrycodes", "in");
    url.searchParams.set("q", query);

    const response = await fetch(url, {
      headers: {
        "User-Agent": "farmrisk-dashboard/1.0",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        { results: [], error: "Location search failed." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as NominatimSearchItem[];

    return Response.json({
      results: data.map((item) => ({
        id: String(item.place_id),
        name: buildVillageLabel(item),
        displayName: item.display_name,
        lat: Number(item.lat),
        lng: Number(item.lon),
      })),
    });
  }

  if (mode === "reverse") {
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    if (!lat || !lon) {
      return Response.json(
        { error: "Latitude and longitude are required." },
        { status: 400 },
      );
    }

    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("lat", lat);
    url.searchParams.set("lon", lon);

    const response = await fetch(url, {
      headers: {
        "User-Agent": "farmrisk-dashboard/1.0",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        { error: "Reverse geocoding failed." },
        { status: 502 },
      );
    }

    const item = (await response.json()) as NominatimSearchItem & {
      address?: NominatimSearchItem["address"];
    };

    return Response.json({
      name: buildVillageLabel(item),
      displayName: item.display_name,
      lat: Number(lat),
      lng: Number(lon),
    });
  }

  return Response.json(
    { error: "Invalid location mode. Use search or reverse." },
    { status: 400 },
  );
}
