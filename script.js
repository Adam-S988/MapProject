// Map slider values to years
const yearMap = {
  1: "1500BC",
  2: "1000BC",
  3: "200BC",
  4: "1AD",
  5: "100AD",
  6: "200AD",
  7: "500AD",
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
      lat: 47.243,
      lon: 3.5302,
      language: "Celtic",
      region: "Gaul, Britian, Central Europe",
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
  "200BC": [
    {
      lat: 41.9028,
      lon: 12.4964,
      language: "Latin",
      region: "Roman Empire (Italy)",
      notes: "Main language of Rome.",
    },
    {
      lat: 43.6532,
      lon: 2.4131,
      language: "Celtic",
      region: "Gaul",
      notes: "Celtic spoken across Gaul.",
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

// Set the slider's max value to 5 to match the years in yearMap
slider.max = 10;

// Event listener for the slider input
slider.addEventListener("input", (event) => {
  const yearKey = yearMap[event.target.value];
  yearLabel.textContent = yearKey.replace("BC", " BC").replace("AD", " AD");
  loadLanguageData(yearKey); // Load the markers for the selected year
});

// Initial load for 1500 BC
loadLanguageData("1500BC");
