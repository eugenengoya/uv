import useOpenMeteo from "../hooks/useOpenMeteo";
import { convertSeconds, convertTime } from "../utils/stringUtils";

export default function UV() {
  const { data, loading } = useOpenMeteo();

  return (
    <div className="flex w-96 flex-col rounded-3xl border p-4 shadow">
      {loading ? (
        <div className="flex items-center justify-center">
          <p className="uppercase">Loading Uv Data...</p>
        </div>
      ) : (
        data && (
          <div className="flex">
            <p className="text-4xl">
              Uv index is {data.daily.uv_index_max} today, peaking at{" "}
              {data.daily.uv_index_clear_sky_max}. Expect{" "}
              {convertSeconds(data.daily.sunshine_duration)} of sun in{" "}
              {convertSeconds(data.daily.daylight_duration)} of daylight. Sun
              rises at {convertTime(data.daily.sunrise)} and sets at{" "}
              {convertTime(data.daily.sunset)}
            </p>
          </div>
        )
      )}
    </div>
  );
}
