import airports from './airports';

// airports refers to the airports.js attached

/**
 * Convert degrees to radians
 * @param degrees  angle, in degrees
 * @return same angle in radians
 */
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Get the great circle distance between two points (lat + long)
 * @param lat1
 * @param lon1
 * @param lat2
 * @param lon2
 * @return distance in metres
 */
export function distance(lat1, lon1, lat2, lon2) {
  // From http://www.movable-type.co.uk/scripts/latlong.html
  const R = 6371e3; // metres
  const latRadians1 = toRadians(lat1);
  const latRadians2 = toRadians(lat2);
  const latDiffRadians = toRadians(lat2 - lat1);
  const lonDiffRadians = toRadians(lon2 - lon1);

  const a =
    Math.sin(latDiffRadians / 2) * Math.sin(latDiffRadians / 2) +
    Math.cos(latRadians1) *
      Math.cos(latRadians2) *
      Math.sin(lonDiffRadians / 2) *
      Math.sin(lonDiffRadians / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

/**
 * Get the great circle distance between two airports
 * @param airport1
 * @param airport2
 * @return distance in metres
 */
export function airportsDistance(airport1, airport2) {
  const info1 = airports[airport1];
  const info2 = airports[airport2];
  return distance(
    info1.latitude,
    info1.longitude,
    info2.latitude,
    info2.longitude,
  );
}

/**
 * Convert a km to degrees latitude
 * @param kms  kilometers to convert
 * @return distance in degrees for latitude
 */
export function distToLat(kms) {
  return kms / 111;
}

/**
 * Convert a km to degrees longitude
 * @param kms  kilometers to convert
 * @param lat  latitude degrees
 * @return distance in degrees for longitude
 */
export function distToLon(kms, lat) {
  return kms / 111 / Math.cos(toRadians(lat));
}

/**
 * Sort objects (in-place) by distance to a reference point
 * @param objs  objects to sort with { latitude, longitude }
 * @param lat   latitude of reference point
 * @param lon   longitude of reference point
 * @return objs
 */
export function sortByDistance(objs, lat, lon) {
  return objs.sort(
    (
      { latitude: lat1, longitude: lon1 },
      { latitude: lat2, longitude: lon2 },
    ) => distance(lat1, lon1, lat, lon) - distance(lat2, lon2, lat, lon),
  );
}

export default {
  distance,
  airportsDistance,
  distToLat,
  distToLon,
  sortByDistance,
};
