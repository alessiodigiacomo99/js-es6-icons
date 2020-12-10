$(document).ready(function () {
    // Qui le icone che abbiamo definito nella milestone 1
    let icone = [
        {
            name: "cat",
            prefix: "fas",
            type: "fa",
            family: "cat"
        },

        {
            name: "crow",
            prefix: "fas",
            type: "fa",
            family: "crow"
            // <i class="fas fa-crow"></i>
        },

        {
            name: "dog",
            prefix: "fas",
            type: "fa",
            family: "dog"
            // <i class="fas fa-dog"></i>
        },

        {
            name: "dove",
            prefix: "fas",
            type: "fa",
            family: "dove"
            // <i class="fas fa-dove"></i>
        },

        {
            name: "dragon",
            prefix: "fas",
            type: "fa",
            family: "dragon"
            // <i class="fas fa-dragon"></i>
        },

        {
            name: "horse",
            prefix: "fas",
            type: "fa",
            family: "horse"
            // <i class="fas fa-horse"></i>
        },

        {
            name: "hippo",
            prefix: "fas",
            type: "fa",
            family: "hippo"
            // <i class="fas fa-hippo"></i>
        },

        {
            name: "fish",
            prefix: "fas",
            type: "fa",
            family: "fish"
            // <i class="fas fa-fish"></i>
        }
    ]

    // definiamo dei colori per le icone (blue, orange, purple)
    const color = ["blue", "orange", "purple"]
    //aggiungiamo dei colori usando una funzione
    icone.forEach(element => {
        element.color = color[Math.floor(Math.random()*3)]
    });
    console.log(icone);
    //inseriamo le icone colorate nel container
    const icons = $(".icons");
    icone.forEach(element => {
        let icona = `<div>
        <i class = "${element.prefix} ${element.type}-${element.family}" style ="color:${element.color}"</i>
        </div>`;
        icons.append(icona)
    });
  
  });
  
  
  /* ---- FUNCTIONS ----*/
  //1. Funzione milestone 1
  
  
  //2. funzione per assegnare un colore ad un icona
  // tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 
  
  
  //3. funzione per ottenere da un array
  // tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.