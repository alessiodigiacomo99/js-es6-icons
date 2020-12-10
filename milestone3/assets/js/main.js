$(document).ready(function () {
    // Qui le icone che abbiamo definito nella milestone 1
    

    // definiamo dei colori per le icone (blue, orange, purple)
    
    //aggiungiamo dei colori usando una funzione
    
    //inseriamo le icone colorate nel container
    
  
  });
  
$(document).ready(function () {
    // icone come da milestone 1
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
   
    // colori come da milestone 2
    const color = ["blue", "orange", "purple"]
   
    //aggiungiamo dei colori come da milestone 2
    icone.forEach(element => {
        element.color = color[Math.floor(Math.random()*3)]
    });
    console.log(icone);
    //inseriamo le icone nel container come da milestone 2
    const icons = $(".icons");
    let icona = "";
    icone.forEach(element => {
        icona = `<div><i class = "${element.prefix} ${element.type}-${element.family}" style ="color:${element.color}"></i></i><div class="title">${element.name}</div></div>`;
        icons.append(icona);
    });
    //estrapoliamo i tipi di icone
    let [blue, orange, purple] = [color[0], color[1], color[2]];
    //aggiungiamo i tipi alla select
    let select = $("select");
    let opzioni = `<option value="blue">${blue}</option>
    <option value="orange">${orange}</option>
    <option value="purple">${purple}</option>`;
    select.append(opzioni);
    //al change mostriamo solo le icone filtrate
    select.change(function(){
        $(".icons div").remove();
        let newIcone = [];
        let x = select.val();
        icone.forEach(element => {
           if (element.color == x){
               newIcone.push(element);
           }else if (x == "all"){
               newIcone.push(element);
           }
        });
        console.log(newIcone);
        let newIcona = "";
        newIcone.forEach(element => {
        newIcona = `<div><i class = "${element.prefix} ${element.type}-${element.family}" style ="color:${element.color}"></i></i><div class="title">${element.name}</div></div>`;
        icons.append(newIcona);
        });
    });
});