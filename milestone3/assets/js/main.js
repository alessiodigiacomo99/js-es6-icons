$(document).ready(function () {
    // icone come da milestone 1
    class icone {
        constructor(name, prefix, type, family){
            this.name = name;
            this.prefix = prefix;
            this.type = type;
            this.family = family;
        }
    };
    
    const cat = new icone("cat", "fas", "fa", "animal");
    const crow = new icone("crow", "fas", "fa", "animal");
    const dog = new icone("dog", "fas", "fa", "animal");
    const dove = new icone("dove", "fas", "fa", "animal");
    const dragon = new icone("dragon", "fas", "fa", "animal");
    const horse = new icone("horse", "fas", "fa", "animal");
    const hippo = new icone("hippo", "fas", "fa", "animal");
    const fish = new icone("fish", "fas", "fa", "animal");
    const carrot = new icone("carrot", "fas", "fa", "vegetables");
    const apple = new icone("apple-alt", "fas", "fa", "vegetables");
    const lemon = new icone("lemon", "fas", "fa", "vegetables");
    const pepper = new icone("pepper-hot", "fas", "fa", "vegetables");
    const astronaut = new icone("user-astronaut", "fas", "fa", "user");
    const graduate = new icone("user-graduate", "fas", "fa", "user");
    const ninja = new icone("user-ninja", "fas", "fa", "user");
    const secret = new icone("user-secret", "fas", "fa", "user");
    
    let arrayIcone = [
        cat, crow, dog, dove, dragon, horse, hippo, fish, carrot, apple, lemon, pepper, astronaut, graduate, ninja, secret
    ];
   
    // colori come da milestone 2
    const color = ["blue", "orange", "purple"];
   
    //aggiungiamo dei colori come da milestone 2
    arrayIcone.forEach(element => {
        if (element.family === "animal"){
            element.color = color[0];
        }else if (element.family === "vegetables"){
            element.color = color[1];
        }else if (element.family === "user"){
            element.color = color[2];
        }
    });
    //inseriamo le icone nel container come da milestone 2
    const container = $(".icons");
    arrayIcone.forEach(element => {
        let markup = `<div><i class = "${element.prefix} ${element.type}-${element.name}" style ="color:${element.color}"></i></i><div class="title">${element.name}</div></div>`;
        container.append(markup);
    });
    //estrapoliamo i tipi di icone
    const [blue, orange, purple] = color;
    //aggiungiamo i tipi alla select
    const select = $("select");
    const opzioni = `<option value="blue">${blue}</option>
    <option value="orange">${orange}</option>
    <option value="purple">${purple}</option>`;
    select.append(opzioni);
    //al change mostriamo solo le icone filtrate
    select.change(function(){
        $(".icons div").remove();
        const newIcone = [];
        let x = select.val();
        arrayIcone.forEach(element => {
           if (element.color == x){
               newIcone.push(element);
           }else if (x == "all"){
               newIcone.push(element);
           }
        });
        newIcone.forEach(element => {
        let newmarkup = `<div><i class = "${element.prefix} ${element.type}-${element.name}" style ="color:${element.color}"></i></i><div class="title">${element.name}</div></div>`;
        container.append(newmarkup);
        });
    });
});