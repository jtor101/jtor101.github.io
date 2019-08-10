"use strict";

window.onload = function() {
  let objs;

  $.getJSON("data/mountains.json", function(data) {
    // set JSON data to own variable.
    objs = data;

    // Dropdown
    let mtnPicker = document.getElementById("mtnPicker");

    // fills Dropdown options
    for (let i = 0; i < objs.mountains.length; i++) {
      let mt = objs.mountains[i].name;
      let element = document.createElement("option");
      element.text = mt;
      element.value = mt;
      mtnPicker.appendChild(element);
    }

    // on change event, populates table.
    mtnPicker.onchange = function() {
      // Establish selection.
      let selection = mtnPicker.selectedIndex - 1;

      // Get table
      let mtnDisplay = document.getElementById("mtnDisplay");

      // Clear table.
      mtnDisplay.innerHTML = "";

      // Establish row and cell insertion.
      let row = mtnDisplay.insertRow(0);
      let cellA1 = row.insertCell(0);
      let cellA2 = row.insertCell(1);
      let cellA3 = row.insertCell(2);
      let cellA4 = row.insertCell(3);
      let cellA5 = row.insertCell(4);
      let cellA6 = row.insertCell(5);

      // Append results to table from selection.
      cellA1.innerHTML = objs.mountains[selection].name;
      cellA2.innerHTML = objs.mountains[selection].elevation;
      cellA3.innerHTML = objs.mountains[selection].effort;
      cellA4.innerHTML = objs.mountains[selection].desc;
      cellA5.innerHTML = objs.mountains[selection].coords.lat;
      cellA6.innerHTML = objs.mountains[selection].coords.lng;
    };
  });
};
