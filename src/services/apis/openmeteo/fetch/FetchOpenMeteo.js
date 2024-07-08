import config from "./config_openmeteo.js";

export async function FetchOpenMeteo() {
  const lat = -1.2832533;
  const lon = 36.8172449;
  const response = await fetch(
    `${config.API_URL}latitude=${lat}&longitude=${lon}&daily=sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max&timeformat=unixtime&timezone=auto&forecast_days=1`
  );
  return await response.json();
}
