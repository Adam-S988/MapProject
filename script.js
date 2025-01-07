// Map slider values to years
const yearMap = {
  1: "1500BC",
  2: "1000BC",
  3: "800BC",
  4: "600BC",
  5: "400BC",
  6: "200BC",
  7: "1AD",
  8: "100AD",
  9: "200AD",
  10: "300AD",
  11: "400AD",
  12: "500AD",
  13: "600AD",
  14: "700AD",
  15: "800AD",
};

// Initialize the map
const map = L.map("map").setView([45, 10], 4); // Centered on Europe

// Add tile layer to map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Define markers data for each time period
const markersData = {
  "1500BC": [
    {
      lat: 46.3644,
      lon: 13.4428,
      language: "Italic",
      region: "",
      notes: "Ancestor to all Italic/Romance languages",
    },
    {
      lat: 47.243,
      lon: 5.5302,
      language: "Celtic",
      region: "Gaul",
      notes: "Ancestor to all Celtic languages.",
    },
    {
      lat: 40.4637,
      lon: -3.7492,
      language: "Iberian",
      region: "Iberian Peninsula",
      notes: "Iberian languages.",
    },
    {
      lat: 53.1,
      lon: 10.2,
      language: "Germanic",
      region: "Germania Scandenavia",
      notes: "Ancestor to all Germanic languages.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
    {
      lat: 51.0519,
      lon: 26.1433,
      language: "Slavic",
      region: "Eastern Europe",
      notes: "Ancestor to all Slavic languages.",
    },
  ],
  "1000BC": [
    {
      lat: 45.3644,
      lon: 12.4428,
      language: "Italic",
      region: "",
      notes: "Ancestor to all Italic/Romance languages",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul",
      notes: "Ancestor to all Celtic languages.",
    },
    {
      lat: 40.4637,
      lon: -3.7492,
      language: "Iberian",
      region: "Iberian Peninsula",
      notes: "Iberian languages.",
    },
    {
      lat: 53.1,
      lon: 10.2,
      language: "Germanic",
      region: "Germania Scandenavia",
      notes: "Ancestor to all Germanic languages.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
    {
      lat: 51.0519,
      lon: 26.1433,
      language: "Slavic",
      region: "Eastern Europe",
      notes: "Ancestor to all Slavic languages.",
    },
  ],
  "800BC": [
    {
      lat: 45.3644,
      lon: 12.4428,
      language: "Italic",
      region: "Italy",
      notes: "Ancestor to all Italic/Romance languages",
    },
    {
      lat: 50.5843,
      lon: 0.2126,
      language: "Celtic",
      region: "Britian, Ireland, Gaul, Iberia",
      notes: "Ancestor to Insular Celtic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul",
      notes: "Ancestor to Contenental Celtic languages.",
    },
    {
      lat: 45.1255,
      lon: 8.3215,
      language: "Celtic",
      region: "South Europe",
      notes: "Lepontic",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 40.4637,
      lon: -3.7492,
      language: "Iberian",
      region: "Iberian Peninsula",
      notes: "Iberian languages.",
    },
    {
      lat: 53.1,
      lon: 10.2,
      language: "Germanic",
      region: "Germania Scandenavia",
      notes: "Ancestor to all Germanic languages.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
    {
      lat: 51.0519,
      lon: 26.1433,
      language: "Slavic",
      region: "Eastern Europe",
      notes: "Ancestor to all Slavic languages.",
    },
  ],
  "600BC": [
    {
      lat: 43.575,
      lon: 12.2751,
      language: "Italic",
      region: "Italy",
      notes: "Ancestor to all Italic/Romance languages",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian, Ireland, Gaul, Iberia",
      notes: "Ancestor to Insular Celtic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Britain",
      notes: "Ancestor to Contenental Celtic languages.",
    },
    {
      lat: 45.1255,
      lon: 8.3215,
      language: "Celtic",
      region: "South Europe",
      notes: "Lepontic",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 42.0855,
      lon: -7.4438,
      language: "Iberian",
      region: "Iberian Peninsula",
      notes: "Iberian languages.",
    },
    {
      lat: 53.1,
      lon: 10.2,
      language: "Germanic",
      region: "Germania, Scandenavia",
      notes: "Ancestor to all Germanic languages.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
    {
      lat: 51.0519,
      lon: 26.1433,
      language: "Slavic",
      region: "Eastern Europe",
      notes: "Ancestor to all Slavic languages.",
    },
  ],
  "400BC": [
    {
      lat: 43.575,
      lon: 12.2751,
      language: "Italic",
      region: "Italy",
      notes: "Ancestor to all Italic/Romance languages",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian, Ireland, Iberia",
      notes: "Ancestor to Insular Celtic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Britain, Iberia, Central Europe",
      notes: "Ancestor to Contenental Celtic languages.",
    },
    {
      lat: 45.1255,
      lon: 8.3215,
      language: "Celtic",
      region: "South Europe",
      notes: "Lepontic",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 42.0855,
      lon: -7.4438,
      language: "Iberian",
      region: "Iberian Peninsula",
      notes: "Iberian languages.",
    },
    {
      lat: 53.1,
      lon: 10.2,
      language: "Germanic",
      region: "Germania, Scandenavia",
      notes: "Ancestor to all Germanic languages.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
    {
      lat: 51.0519,
      lon: 26.1433,
      language: "Slavic",
      region: "Eastern Europe",
      notes: "Ancestor to all Slavic languages.",
    },
  ],
  "200BC": [
    {
      lat: 41.9028,
      lon: 12.4964,
      language: "Latin",
      region: "Roman Empire (Italy)",
      notes: "Main language of Rome.",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Brythonic languages.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Britain, Central Europe",
      notes: "Gaulish language.",
    },
    {
      lat: 39.3048,
      lon: 31.2748,
      language: "Celtic",
      region: "Anatolia",
      notes: "Galatian language.",
    },
    {
      lat: 40.1729,
      lon: -4.4709,
      language: "Celtic",
      region: "Iberia",
      notes: "Celtiberian language.",
    },
    {
      lat: 43.0204,
      lon: -7.223,
      language: "Celtic",
      region: "Iberia",
      notes: "Gallcian language.",
    },
    {
      lat: 45.1255,
      lon: 8.3215,
      language: "Celtic",
      region: "South Europe",
      notes: "Lepontic",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 40.4637,
      lon: -3.7492,
      language: "Iberian, Celtic",
      region: "Iberian Peninsula",
      notes: "Iberian and Celtic languages.",
    },
    {
      lat: 53.1,
      lon: 10.2,
      language: "Germanic",
      region: "Germania Scandenavia",
      notes: "Germanic languages start to spread.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "1AD": [
    {
      lat: 43.65107,
      lon: 6.0131,
      language: "Latin",
      region: "Western Europe (Roman Empire)",
      notes: "Latin is the dominant language.",
    },
    {
      lat: 51.1657,
      lon: 10.4515,
      language: "Germanic",
      region: "Germania",
      notes: "Germanic tribes expanding.",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian, Gaul, Iberia",
      notes: "Brythonic languages.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Britain, Central Europe",
      notes: "Gaulish language.",
    },
    {
      lat: 39.3048,
      lon: 31.2748,
      language: "Celtic",
      region: "Anatolia",
      notes: "Galatian language.",
    },
    {
      lat: 40.1729,
      lon: -4.4709,
      language: "Celtic",
      region: "Iberia",
      notes: "Celtiberian language.",
    },
    {
      lat: 43.0204,
      lon: -7.223,
      language: "Celtic",
      region: "Iberia",
      notes: "Gallcian language.",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "100AD": [
    {
      lat: 43.65107,
      lon: 6.0131,
      language: "Latin",
      region: "Western Europe (Roman Empire)",
      notes: "Latin is the dominant language.",
    },
    {
      lat: 51.1657,
      lon: 10.4515,
      language: "Germanic",
      region: "Germania",
      notes: "Germanic tribes expanding.",
    },
    {
      lat: 59.17,
      lon: 11.43,
      language: "Germanic",
      region: "Scandenavia",
      notes: "North Germanic languages remain in Scandenavia.",
    },
    {
      lat: 51.09,
      lon: 16.0,
      language: "Germanic",
      region: "Scandenavia",
      notes: "East Germanic languages begin to spread eastward.",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Brythonic languages.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Central Europe",
      notes: "Gaulish language.",
    },
    {
      lat: 39.3048,
      lon: 31.2748,
      language: "Celtic",
      region: "Anatolia",
      notes: "Galatian language.",
    },
    {
      lat: 40.1729,
      lon: -4.4709,
      language: "Celtic",
      region: "Iberia",
      notes: "Celtiberian language.",
    },
    {
      lat: 43.0204,
      lon: -7.223,
      language: "Celtic",
      region: "Iberia",
      notes: "Gallcian language.",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "200AD": [
    {
      lat: 43.65107,
      lon: 6.0131,
      language: "Latin",
      region: "Western Europe (Roman Empire)",
      notes: "Latin is the dominant language.",
    },
    {
      lat: 51.1657,
      lon: 10.4515,
      language: "Germanic",
      region: "Germania",
      notes: "Elbe Germanic tribes dominate central Europe.",
    },
    {
      lat: 51.44,
      lon: 4.5,
      language: "Germanic",
      region: "Germania",
      notes: "Weser-Rhine Germanic dominate the lowlands.",
    },
    {
      lat: 59.17,
      lon: 11.43,
      language: "Germanic",
      region: "Scandenavia",
      notes: "North Germanic languages remain in Scandenavia.",
    },
    {
      lat: 51.09,
      lon: 16.0,
      language: "Germanic",
      region: "Scandenavia",
      notes: "East Germanic languages begin to spread eastward.",
    },
    {
      lat: 53.56,
      lon: 9.18,
      language: "Germanic",
      region: "Scandenavia",
      notes:
        "North Sea Germanic dominates northern Germania, and spreads to Britannia.",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Brythonic languages.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Central Europe",
      notes: "Gaulish language.",
    },
    {
      lat: 39.3048,
      lon: 31.2748,
      language: "Celtic",
      region: "Anatolia",
      notes: "Galatian language.",
    },
    {
      lat: 40.1729,
      lon: -4.4709,
      language: "Celtic",
      region: "Iberia",
      notes: "Celtiberian language.",
    },
    {
      lat: 43.0204,
      lon: -7.223,
      language: "Celtic",
      region: "Iberia",
      notes: "Gallcian language.",
    },
    {
      lat: 48.0445,
      lon: 15.132,
      language: "Celtic",
      region: "Central Europe",
      notes: "Noric",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "300AD": [
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Common Brythonic languages.",
    },
    {
      lat: 56.474,
      lon: -4.154,
      language: "Celtic",
      region: "North Britian",
      notes: "Pictish language.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Central Europe",
      notes: "Gaulish language.",
    },
    {
      lat: 39.3048,
      lon: 31.2748,
      language: "Celtic",
      region: "Anatolia",
      notes: "Galatian language.",
    },
    {
      lat: 41.4623,
      lon: -5.2719,
      language: "Celtic",
      region: "Iberia",
      notes: "Celtiberian language.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "400AD": [
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Common Brythonic languages.",
    },
    {
      lat: 56.474,
      lon: -4.154,
      language: "Celtic",
      region: "North Britian",
      notes: "Pictish language.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Britain, Central Europe",
      notes: "Gaulish language.",
    },
    {
      lat: 39.3048,
      lon: 31.2748,
      language: "Celtic",
      region: "Anatolia",
      notes: "Galatian language.",
    },
    {
      lat: 41.4623,
      lon: -5.2719,
      language: "Celtic",
      region: "Iberia",
      notes: "Celtiberian language.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "500AD": [
    {
      lat: 48.8566,
      lon: 2.3522,
      language: "Latin",
      region: "Italy",
      notes: "Latin remains dominant in Italy.",
    },
    {
      lat: 51.1657,
      lon: 10.4515,
      language: "Germanic",
      region: "Germania",
      notes: "Elbe Germanic tribes dominate central Europe.",
    },
    {
      lat: 51.44,
      lon: 4.5,
      language: "Germanic",
      region: "Germania",
      notes: "Weser-Rhine Germanic dominate the lowlands.",
    },
    {
      lat: 53.56,
      lon: 9.18,
      language: "Germanic",
      region: "Scandenavia",
      notes:
        "North Sea Germanic dominates northern Germania, and spreads to Britannia.",
    },
    {
      lat: 46.04,
      lon: 18.43,
      language: "Germanic",
      region: "Europe",
      notes: "East Germanic continues to spread.",
    },
    {
      lat: 40.02,
      lon: -2.11,
      language: "Germanic",
      region: "Europe",
      notes: "East Germanic continues to spread.",
    },
    {
      lat: 59.17,
      lon: 11.43,
      language: "Germanic",
      region: "Scandenavia",
      notes: "Old Norse remain in Scandenavia.",
    },
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Common Brythonic languages.",
    },
    {
      lat: 56.474,
      lon: -4.154,
      language: "Celtic",
      region: "North Britian",
      notes: "Pictish language.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul",
      notes: "Gaulish language.",
    },
    {
      lat: 55.0006,
      lon: 23.3424,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Ancestor to all Baltic languages.",
    },
  ],
  "600AD": [
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Common Brythonic languages.",
    },
    {
      lat: 56.474,
      lon: -4.154,
      language: "Celtic",
      region: "North Britian",
      notes: "Pictish language.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul",
      notes: "Gaulish language.",
    },
    {
      lat: 54.3613,
      lon: 21.4004,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Western Baltic languages.",
    },
    {
      lat: 55.3444,
      lon: 25.064,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Eastern Baltic languages.",
    },
    {
      lat: 56.0015,
      lon: 34.0503,
      language: "Baltic",
      region: "Eastern Europe",
      notes: "Dniepr languages.",
    },
  ],
  "700AD": [
    {
      lat: 52.4125,
      lon: -1.2001,
      language: "Celtic",
      region: "Britian",
      notes: "Common Brythonic languages.",
    },
    {
      lat: 56.474,
      lon: -4.154,
      language: "Celtic",
      region: "North Britian",
      notes: "Pictish language.",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Goidelic languages.",
    },
    {
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul",
      notes: "Gaulish language.",
    },
    {
      lat: 54.3613,
      lon: 21.4004,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Western Baltic languages.",
    },
    {
      lat: 55.3444,
      lon: 25.064,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Eastern Baltic languages.",
    },
    {
      lat: 56.0015,
      lon: 34.0503,
      language: "Baltic",
      region: "Eastern Europe",
      notes: "Dniepr languages.",
    },
  ],
  "800AD": [
    {
      lat: 57.474,
      lon: -3.154,
      language: "Celtic",
      region: "North Britian",
      notes: "Pictish",
    },
    {
      lat: 53.4439,
      lon: -8.1054,
      language: "Celtic",
      region: "Ireland",
      notes: "Irish",
    },
    {
      lat: 48.0833,
      lon: -3.3056,
      language: "Celtic",
      region: "Brittany",
      notes: "Breton",
    },
    {
      lat: 50.4829,
      lon: -3.4531,
      language: "Celtic",
      region: "Cornwall",
      notes: "Cornish",
    },
    {
      lat: 52.3511,
      lon: -3.2041,
      language: "Celtic",
      region: "Wales",
      notes: "Welsh",
    },
    {
      lat: 54.2338,
      lon: -2.5716,
      language: "Celtic",
      region: "Crumbria",
      notes: "Cumbric",
    },
    {
      lat: 56.2523,
      lon: -5.595,
      language: "Celtic",
      region: "North Britian",
      notes: "Scottish Gaelic",
    },
    {
      lat: 54.1359,
      lon: -4.3508,
      language: "Celtic",
      region: "Mann",
      notes: "Manx",
    },
    {
      lat: 54.3613,
      lon: 21.4004,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Western Baltic languages.",
    },
    {
      lat: 55.3444,
      lon: 25.064,
      language: "Baltic",
      region: "Baltic Europe",
      notes: "Eastern Baltic languages.",
    },
    {
      lat: 56.0015,
      lon: 34.0503,
      language: "Baltic",
      region: "Eastern Europe",
      notes: "Dniepr languages.",
    },
  ],
};

// Map of language to color
const languageColorMap = {
  Latin: "blue",
  Italic: "blue",
  Celtic: "green",
  Germanic: "red",
  Iberian: "purple",
  Slavic: "yellow",
  Baltic: "orange",
};

// Function to create a marker with a custom color based on the language
function getLanguageMarkerColor(language) {
  return languageColorMap[language] || "gray"; // Default to gray if the language is not in the map
}

// Function to load language data and display markers with different colors
function loadLanguageData(year) {
  // Clear any existing markers on the map
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
      map.removeLayer(layer); // Remove all markers (both L.Marker and L.CircleMarker)
    }
  });

  // Load markers for the selected year
  const markers = markersData[year]; // Get the markers for the selected year

  markers.forEach((marker) => {
    const markerColor = getLanguageMarkerColor(marker.language); // Get the color based on the language

    // Create a circle marker with the color based on the language
    L.circleMarker([marker.lat, marker.lon], {
      color: markerColor,
      fillColor: markerColor,
      fillOpacity: 0.5,
      radius: 8, // Size of the marker
    })
      .addTo(map)
      .bindPopup(
        `<b>${marker.language}</b><br>${marker.region}<br>${marker.notes}`
      );
  });
}

// Get slider and year label elements
const slider = document.getElementById("timeSlider");
const yearLabel = document.getElementById("yearLabel");
const playButton = document.getElementById("playButton");

let intervalId; // To store the interval ID
let isPlaying = false; // To track if the play button is active

// Set the slider's max value to 5 to match the years in yearMap
slider.max = 15;

// Event listener for the slider input
slider.addEventListener("input", (event) => {
  const yearKey = yearMap[event.target.value];
  yearLabel.textContent = yearKey.replace("BC", " BC").replace("AD", " AD");
  loadLanguageData(yearKey); // Load the markers for the selected year
});

// Event listener for the Play button
playButton.addEventListener("click", () => {
  if (isPlaying) {
    clearInterval(intervalId); // Stop the interval if it's running
    playButton.textContent = "Play"; // Change button text back to "Play"
    isPlaying = false;
  } else {
    isPlaying = true;
    playButton.textContent = "Pause"; // Change button text to "Pause"

    let currentValue = parseInt(slider.value); // Get the current slider value
    const maxValue = parseInt(slider.max); // Get the maximum slider value

    intervalId = setInterval(() => {
      if (currentValue <= maxValue) {
        const yearKey = yearMap[currentValue];
        yearLabel.textContent = yearKey
          .replace("BC", " BC")
          .replace("AD", " AD");
        loadLanguageData(yearKey); // Load the markers for the current year
        slider.value = currentValue; // Update the slider to match
        currentValue += 1; // Move to the next year
      } else {
        clearInterval(intervalId); // Stop the interval when the max is reached
        playButton.textContent = "Play"; // Reset the button text
        isPlaying = false;
      }
    }, 2000); // Change year every 2 seconds (adjust as needed)
  }
});

// Initial load for 1500 BC
loadLanguageData("1500BC");
