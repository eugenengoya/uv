import useOpenMeteo from "../hooks/useOpenMeteo";
import { convertSeconds, convertTime } from "../utils/stringUtils";

export default function UV() {
  const { data, loading } = useOpenMeteo();

  return (
    <div className="flex size-80 flex-col rounded-3xl border p-4 shadow">
      {loading ? (
        <div className="items-center justify-center">
          <p className="uppercase">Loading UV Data...</p>
        </div>
      ) : (
        data && (
          <div className="flex h-full flex-col justify-between text-xl">
            <div>
              <p className="text-4xl">{data.daily.uv_index_max}</p>
              <p>Peak: {data.daily.uv_index_clear_sky_max}</p>
              <p>Sun: {convertSeconds(data.daily.sunshine_duration)}</p>
              <p>Daylight: {convertSeconds(data.daily.daylight_duration)}</p>
            </div>
            <div className="mt-auto flex justify-between text-sm uppercase">
              <p>Sunrise: {convertTime(data.daily.sunrise)}</p>
              <p>Sunset: {convertTime(data.daily.sunset)}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
