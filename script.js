  // hjelpevariable for både view og controller
  var contentDiv = document.getElementById('content');
    
  // model
  let numbers = [7, 3, 1, 5, 8];
  let chosenBar; // Variabel for hvilken stolpe som er valgt
  let inputValue; // Variabel for hva som er skrevet i input-feltet
  let strokeColor;
  let slåttav = "disabled";

  // view
  show();
  function show() { 
      let svgInnerHtml = '';
      for (let i = 0; i < numbers.length; i++) {
          svgInnerHtml += createBar(numbers[i], i + 1);
      }
      contentDiv.innerHTML = `
          <svg id="chart" width="500" viewBox="0 0 80 60">
              ${svgInnerHtml}
          </svg><br/>
          Valgt stolpe: <i>${chosenBar || "ingen"}</i>
          <br />
          Verdi:
          <input type="number" min="1" max="10" oninput="inputValue = this.value" /> </br>
          <button onclick="addBar(inputValue)">Legg til stolpe</button>
          <button ${slåttav} onclick="editBar(${chosenBar})">Endre valgt stolpe</button>
          <button ${slåttav} onclick="removeBar()">Fjerne valgt stolpe</button>
          `;
  }

  //number = verdi, barno= plasering av stoplpe
  function createBar(number, barNo) {
      const width = 8;
      const spacing = 2;
      let x = (barNo - 1) * (width + spacing);
      let height = number * 10;
      let y = 60 - height;
      let color = calcColor(1, 10, barNo);
      //et annet eksempel å skrive koden på for å merker/velge en stolpe
            // if (barNo == chosenBar) {
            //   border = "black";
            // }
            // else {
            //   border = " ";
            // }

        //merker/velger stolpen. bruker ? for å gi "black" til å være riktig og "" til være lik false(ingentig skjer pga ingenting er merkert).
      let border = barNo == chosenBar ? "black" : "";

      // $(dollarsign) signaliserer at det er noe av verdi å hente
      return `<rect onclick="choseBar(${barNo})" width="${width}" height="${height}"
                          x="${x}" y="${y}" fill= "${color}" stroke= "${border}"> </rect>`;
  }

  function calcColor(min, max, val) {
      var minHue = 240, maxHue = 0;
      var curPercent = (val - min) / (max - min);
      var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
      return colString;
  }

  // controller
 