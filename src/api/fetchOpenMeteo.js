export async function FetchOpenMeteo() {
  const API_URL = "https://api.open-meteo.com/v1/forecast?";
  const lat = -1.28;
  const lon = 36.81;
  const response = await fetch(
    `${API_URL}latitude=${lat}&longitude=${lon}&daily=sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max&timeformat=unixtime&timezone=auto&forecast_days=1`
  );
  return await response.json();
}
