// Map slider values to years
const yearMap = {
  1: "200BC",
  2: "1AD",
  3: "500AD",
};

// Initialize the map
const map = L.map("map").setView([45, 10], 4); // Centered on Europe

// Add tile layer to map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Define markers data for each time period
const markersData = {
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
      notes: "Germanic tribes dominate.",
    },
  ],
};

// Map of language to color
const languageColorMap = {
  Latin: "blue",
  Celtic: "green",
  Germanic: "red",
  Iberian: "purple",
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

// Event listener for the slider input
slider.addEventListener("input", (event) => {
  const yearKey = yearMap[event.target.value];
  yearLabel.textContent = yearKey.replace("BC", " BC").replace("AD", " AD");
  loadLanguageData(yearKey); // Load the markers for the selected year
});

// Initial load for 200 BC
loadLanguageData("200BC");
