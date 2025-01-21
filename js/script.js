// Import utilities and data
import {
  yearMap,
  markersData,
  languageColorMap,
  languageFamilyDetails,
  getLanguageMarkerColor,
} from "./data.js";

// Initialize the map
const map = L.map("map").setView([50, 25], 4); // Centered on Europe

// Add tile layer to map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Function to load language data and display markers with different colors
function loadLanguageData(year) {
  // Clear existing markers
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
      map.removeLayer(layer);
    }
  });

  // Get markers for the selected year
  const markers = markersData[year];
  if (!markers) return;

  markers.forEach((marker) => {
    const markerColor = getLanguageMarkerColor(marker.language); // Get marker color

    // Create and add a circle marker
    L.circleMarker([marker.lat, marker.lon], {
      color: markerColor,
      fillColor: markerColor,
      fillOpacity: 0.5,
      radius: 8,
    })
      .addTo(map)
      .bindPopup(
        `<b>${marker.language}</b><br>${marker.region}<br>${marker.notes}`
      );
  });
}

// Reference to the details box
const detailsBox = document.getElementById("languageDetails");

// Event listener for legend clicks
document.getElementById("legend").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const languageFamily = button.getAttribute("data-language-family");
  if (languageFamily && languageFamilyDetails[languageFamily]) {
    detailsBox.innerHTML = `<h3>${languageFamily}</h3><p>${languageFamilyDetails[languageFamily]}</p>`;
  }
});

// Get slider and year label elements
const slider = document.getElementById("timeSlider");
const yearLabel = document.getElementById("yearLabel");
const playButton = document.getElementById("playButton");

let intervalId;
let isPlaying = false;

// Set the slider's max value to match yearMap keys
slider.max = Object.keys(yearMap).length;

// Update map and year label on slider input
slider.addEventListener("input", () => {
  const year = yearMap[slider.value];
  yearLabel.textContent = year;
  loadLanguageData(year);
});

// Play/pause button functionality
playButton.addEventListener("click", () => {
  if (isPlaying) {
    clearInterval(intervalId);
    playButton.textContent = "Play";
    isPlaying = false;
  } else {
    playButton.textContent = "Pause";
    isPlaying = true;
    intervalId = setInterval(() => {
      slider.value = (parseInt(slider.value) % slider.max) + 1;
      slider.dispatchEvent(new Event("input"));
    }, 1000);
  }
});

// Initial load
slider.value = 1;
slider.dispatchEvent(new Event("input"));
