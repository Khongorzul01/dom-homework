

    function dog() {
        const inp = document.createElement("button");
        inp.setAttribute("type", "button");
        let text = document.createTextNode("dog");
        inp.setAttribute("class", "mmm")
        inp.appendChild(text)
        inp.setAttribute("id","dog")
        
        document.getElementById("body").appendChild(inp);
    }
    dog();
    


    document.querySelector("#dog").addEventListener("click", () => {
        let image = document.createElement("img");
        image.setAttribute("id", "dogImage");
        document.getElementById("dogImage").src ="/image/dog.jpg"
    })


function horse() {
    const inp = document.createElement("button");
    inp.setAttribute("type", "button");
    let text = document.createTextNode("horse");
    inp.appendChild(text)
    inp.setAttribute("id", "horse")
    inp.setAttribute("class", "mmm")

    document.getElementById("body").appendChild(inp);
}
horse();

function cat() {
    const inp = document.createElement("button");
    inp.setAttribute("type", "button");
    let text = document.createTextNode("cat");
    inp.appendChild(text)
    inp.setAttribute("id", "cat")
    inp.setAttribute("class", "mmm")

    document.getElementById("body").appendChild(inp);
}
cat();

function cow() {
    const inp = document.createElement("button");
    inp.setAttribute("type", "button");
    let text = document.createTextNode("cow");
    inp.appendChild(text)
    inp.setAttribute("id", "cow")
    inp.setAttribute("class", "mmm")

    document.getElementById("body").appendChild(inp);
}
cow();

function small() {
    const inp = document.createElement("button");
    inp.setAttribute("type", "button");
    let text = document.createTextNode("small");
    inp.appendChild(text)
    inp.setAttribute("id", "small")
    inp.setAttribute("class", "sm")

    document.getElementById("body").appendChild(inp);
}
small();

function big() {
    const inp = document.createElement("button");
    inp.setAttribute("type", "button");
    let text = document.createTextNode("big");
    inp.appendChild(text)
    inp.setAttribute("id", "big")
    inp.setAttribute("class", "sm")

    document.getElementById("body").appendChild(inp);
}
big();



function zurag() {
        let image = document.createElement("img");
        image.setAttribute("id", "dogImage");
    let jpg = document.getElementById("dogImage").src = "/image/dog.jpg"
    image.appendChild(jpg);
    document.getElementById("body").appendChild(image);
} 
zurag();