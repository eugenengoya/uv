import useOpenMeteo from "../hooks/useOpenMeteo";
import { convertSeconds, convertTime } from "../utils/stringUtils";

export default function UV() {
  const { data, loading } = useOpenMeteo();
  console.log(data)
  return (
    <div className="flex flex-col rounded-3xl border p-4 shadow">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-sm uppercase">Loading Uv Data...</p>
        </div>
      ) : (
        data && (
          <div className="flex flex-col gap-2">
            <p className="font-bold uppercase">
              {import.meta.env.VITE_PROJECT_NAME}
            </p>
            <div className="flex flex-col text-lg">
              <p>UV Index: {data.daily.uv_index_max} </p>
              <p>UV Index Max: {data.daily.uv_index_clear_sky_max}</p>
              <p>
                Sunshine Duration:{" "}
                {convertSeconds(data.daily.sunshine_duration)}
              </p>
              <p>
                Daylight Duration:{" "}
                {convertSeconds(data.daily.daylight_duration)}
              </p>
              <p>Sunrise: {convertTime(data.daily.sunrise)}</p>
              <p>Sunset: {convertTime(data.daily.sunset)}</p>
              <p>Elevation: {data.elevation}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
