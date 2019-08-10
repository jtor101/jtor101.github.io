"use strict";

window.onload = function() {
  // Get ID's
  // Initial select radio buttons
  let locationSelected = document.getElementById("initialSelectLocation");
  let parkTypeSelected = document.getElementById("initialSelectParkType");
  let allSelected = document.getElementById("initialSelectAll");

  // Divs containing Dropdowns for each selection
  let locationSelectDiv = document.getElementById("pickerByLocationDiv");
  let parkTypeSelectDiv = document.getElementById("pickerByParkTypeDiv");
  let allSelectDiv = document.getElementById("pickerByAllDiv");

  // Dropdowns
  let locationSelector = document.getElementById("pickerByLocation");
  let parkTypeSelector = document.getElementById("pickerByParkType");
  let allSelector = document.getElementById("pickerAll");

  // Table Body
  let parkDisplay = document.getElementById("parkDisplay");

  // Radio buttons decide which dropdown to show on change.
  // Search by Location selected
  locationSelected.onchange = function() {
    locationSelectDiv.style.display = "block";
    parkTypeSelectDiv.style.display = "none";
    allSelectDiv.style.display = "none";
  };

  // Search by Park Type selected
  parkTypeSelected.onchange = function() {
    parkTypeSelectDiv.style.display = "block";
    locationSelectDiv.style.display = "none";
    allSelectDiv.style.display = "none";
  };

  // See All Parks selected
  allSelected.onchange = function() {
    allSelectDiv.style.display = "block";
    parkTypeSelectDiv.style.display = "none";
    locationSelectDiv.style.display = "none";
  };

  // Locations Array
  let locations = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  // Park Types Array
  let parkTypes = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
  ];

  // fills dropdown options - Location
  for (let i = 0; i < locations.length; i++) {
    let loc = locations[i];
    let element = document.createElement("option");
    element.text = loc;
    element.value = loc;
    locationSelector.appendChild(element);
  }

  // fills dropdown options - Park Types
  for (let i = 0; i < parkTypes.length; i++) {
    let park = parkTypes[i];
    let element = document.createElement("option");
    element.text = park;
    element.value = park;
    parkTypeSelector.appendChild(element);
  }

  // Define National Parks JSON array
  let objs;

  //JSON Function begins
  $.getJSON("data/nationalparks.json", function(data) {
    objs = data;

    // fills dropdown options - See All Parks
    for (let i = 0; i < objs.parks.length; i++) {
      let parkAll = objs.parks[i].LocationName;
      let element = document.createElement("option");
      element.text = parkAll;
      element.value = parkAll;
      allSelector.appendChild(element);
    }

    // on Change event, populates table. - Location
    locationSelector.onchange = function() {
      // Clear table first.
      parkDisplay.innerHTML = "";

      // Establish Selection
      let selection = locationSelector.selectedIndex - 1;
      let selectedState = locationSelector.value;

      // Compare selected State to options available.
      // Loop through parks array for all matching values
      for (let i = 0; i < objs.parks.length; i++) {
        if (objs.parks[i].State == selectedState) {
          // Establish row and cell insertion.
          let row = parkDisplay.insertRow(0);
          let cellA1 = row.insertCell(0);
          let cellA2 = row.insertCell(1);
          let cellA3 = row.insertCell(2);
          let cellA4 = row.insertCell(3);
          let cellA5 = row.insertCell(4);
          let cellA6 = row.insertCell(5);

          // Append results to table.
          cellA1.innerHTML = objs.parks[i].LocationName;
          cellA2.innerHTML = objs.parks[i].Address;
          cellA3.innerHTML = objs.parks[i].City;
          cellA4.innerHTML = objs.parks[i].State;
          cellA5.innerHTML = objs.parks[i].ZipCode;
          cellA6.innerHTML = objs.parks[i].Phone;
        }
      }
    };

    // on Change event, populates table. - Park Type
    parkTypeSelector.onchange = function() {
      // Clears table first.
      parkDisplay.innerHTML = "";

      // Establish Selection
      let selectedType = parkTypeSelector.value;

      // Compare selected Type to part of name.
      // Loop through parks array for all matching values
      for (let i = 0; i < objs.parks.length; i++) {
        if (objs.parks[i].LocationName.includes(selectedType)) {
          // Establish row and cell insertion.
          let row = parkDisplay.insertRow(0);
          let cellA1 = row.insertCell(0);
          let cellA2 = row.insertCell(1);
          let cellA3 = row.insertCell(2);
          let cellA4 = row.insertCell(3);
          let cellA5 = row.insertCell(4);
          let cellA6 = row.insertCell(5);

          // Append results to table.
          cellA1.innerHTML = objs.parks[i].LocationName;
          cellA2.innerHTML = objs.parks[i].Address;
          cellA3.innerHTML = objs.parks[i].City;
          cellA4.innerHTML = objs.parks[i].State;
          cellA5.innerHTML = objs.parks[i].ZipCode;
          cellA6.innerHTML = objs.parks[i].Phone;
        }
      }
    };

    // on Change event, populates table. - See All Parks
    allSelector.onchange = function() {
      let selection = allSelector.selectedIndex - 1;

      // Clear table first
      parkDisplay.innerHTML = "";

      // Establish row and cell insertion.
      let row = parkDisplay.insertRow(0);
      let cellA1 = row.insertCell(0);
      let cellA2 = row.insertCell(1);
      let cellA3 = row.insertCell(2);
      let cellA4 = row.insertCell(3);
      let cellA5 = row.insertCell(4);
      let cellA6 = row.insertCell(5);

      // Append results to table.
      cellA1.innerHTML = objs.parks[selection].LocationName;
      cellA2.innerHTML = objs.parks[selection].Address;
      cellA3.innerHTML = objs.parks[selection].City;
      cellA4.innerHTML = objs.parks[selection].State;
      cellA5.innerHTML = objs.parks[selection].ZipCode;
      cellA6.innerHTML = objs.parks[selection].Phone;
    };
  });
  // JSON function ends
};
