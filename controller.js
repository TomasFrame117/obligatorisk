  // controller
  function choseBar(selectBar) {
    if ( chosenBar != selectBar) { 
      slåttav = "";
      chosenBar = selectBar;
    }
    else {
      chosenBar = "";
      slåttav = "disabled";
    }
    show()
}

function addBar(number){
    if(inputValue <= 10 && inputValue >= 1) { 
      numbers.push(number);
      inputValue = "";
    } else displayError();
    show();
}

  // edreverdien på valgt stolpe. Vis den ikke finner noen verdi vill den slå ut en alert med en feilmeling. inputValue tilater at valgt stolpe kan endre en verdi mellom 1-10
function editBar() {
    if(inputValue <= 10 && inputValue > 0) {
        numbers.splice(chosenBar -1, 1, inputValue);
    } 
    else {
      displayError();
    }
    show()
}
      //Fjerner valgt stoplpe med a btuke "splice" som gjør det mulig å fjerne eller legge til elemnter.  
function removeBar() {
    numbers.splice(chosenBar -1, 1)
    show()
}

// fingsjonen som sendes når det ikke er oppgit noe verdi eller ingel ledig plass for ny stolpe. En annen måte å gjøre det på bilr å å bruke ""
function displayError(){
  alert("In realm of ice May the blade breathe fire")
  alert("invalide digne. entrez une valeur de 1 à 10.")
}