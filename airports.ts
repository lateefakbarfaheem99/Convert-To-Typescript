// @flow
// import { airportsAndCities } from 'airports-repo';
//
// exports a type of
const airportsAndCities: {
  [iata: string]: {
    label: string;
    cityLabel: string;
    country: string;
    timezone: string;
    latitude: number;
    longitude: number;
    destinations: number;
  };
} = {
  SFO: {
    label: 'San Francisco International',
    cityLabel: 'San Francisco',
    country: 'US',
    timezone: 'Americas/Los_Angeles',
    latitude: 37.7749,
    longitude: -122.4194,
    destinations: 134,
  },
};

const airports = {};

// Transform to the format we need: IATA code to details
for (const code of Object.keys(airportsAndCities)) {
  if (code.length !== 3) continue; // We only want airports

  const airport = airportsAndCities[code];
  const {
    label: name,
    cityLabel: city,
    country,
    timezone,
    latitude,
    longitude,
    destinations,
  } = airport;

  airports[code] = {
    iata: code,
    name,
    city,
    country: country.toLowerCase(),
    timezone,
    latitude,
    longitude,
    hasScheduledService: destinations !== 0,
  };
}

export default airports;
