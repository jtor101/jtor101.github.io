window.onload = function() {

    let objs;

    $.getJSON("data/mountains.json",
        function(data) {
            objs = data;
            let mtnPicker = document.getElementById("mtnPicker");

            // fills dropdown options
            for (let i = 0; i < objs.mountains.length; i++) {
                let mt = objs.mountains[i].name;
                let element = document.createElement("option");
                element.text = mt;
                element.value = mt;
                mtnPicker.appendChild(element);
            }

            // on change event, populates table.
            mtnPicker.onchange = function() {
                let selection = mtnPicker.selectedIndex - 1;

                let mtnDisplay = document.getElementById("mtnDisplay");

                mtnDisplay.innerHTML = "";

                let row = mtnDisplay.insertRow(0);
                let cellA1 = row.insertCell(0);
                let cellA2 = row.insertCell(1);
                let cellA3 = row.insertCell(2);
                let cellA4 = row.insertCell(3);
                let cellA5 = row.insertCell(4);
                let cellA6 = row.insertCell(5);

                cellA1.innerHTML = objs.mountains[selection].name;
                cellA2.innerHTML = objs.mountains[selection].elevation;
                cellA3.innerHTML = objs.mountains[selection].effort;
                cellA4.innerHTML = objs.mountains[selection].desc;
                cellA5.innerHTML = objs.mountains[selection].coords.lat;
                cellA6.innerHTML = objs.mountains[selection].coords.lng;

            }
        }


    )
}