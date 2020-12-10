$(document).ready(function () {
    // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
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
  
    // Selezioniamo il container icons
    const icons = $(".icons");
    //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
    icone.forEach(element => {
        let icona = `<div>
        <i class = "${element.prefix} ${element.type}-${element.family}"></i>
        </div>`;
        icons.append(icona)
    });
  });
  
  
  /* ---- FUNCTIONS ----*/
  // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
  // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
  // tip: il template literal ci puo aiutare con il markup