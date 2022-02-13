

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
        image.setAttribute("class", "zurag")
        image.setAttribute("src","/image/dog.jpg")
        document.querySelector("#body").appendChild(image)
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
document.querySelector("#horse").addEventListener("click", () => {
    let image = document.createElement("img");
    image.setAttribute("id", "horseImage");
    image.setAttribute("class", "zurag")
    image.setAttribute("src","/image/horse.jpg")
    document.querySelector("#body").appendChild(image)
})


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

document.querySelector("#cat").addEventListener("click", () => {
    let image = document.createElement("img");
    image.setAttribute("id", "catImage");
    image.setAttribute("class", "zurag")
    image.setAttribute("src","/image/cat.jpg")
    document.querySelector("#body").appendChild(image)
})

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

document.querySelector("#cow").addEventListener("click", () => {
    let image = document.createElement("img");
    image.setAttribute("id", "cowImage");
    image.setAttribute("class", "zurag")
    image.setAttribute("src","/image/cow.jpg")
    document.querySelector("#body").appendChild(image)
})

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

document.querySelector("#small").addEventListener("click", () => {

        document.querySelector("#dogImage").style.width ="400px";
})
document.querySelector("#small").addEventListener("click", () => {
    document.querySelector("#catImage").style.width ="400px";
})
document.querySelector("#small").addEventListener("click", () => {
    document.querySelector("#horseImage").style.width ="400px";
})
document.querySelector("#small").addEventListener("click", () => {
    document.querySelector("#cowImage").style.width ="400px";
})

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


document.querySelector("#big").addEventListener("click", () => {

    document.querySelector("#dogImage").style.width ="800px";
})
document.querySelector("#big").addEventListener("click", () => {
document.querySelector("#catImage").style.width ="800px";
})
document.querySelector("#big").addEventListener("click", () => {
document.querySelector("#horseImage").style.width ="800px";
})
document.querySelector("#big").addEventListener("click", () => {
document.querySelector("#cowImage").style.width ="800px";
})

// Багшаа нэмэлтээр асуух зүйлс байна
//Дээрх жижгэрүүлэх үйлдлийг тус бүрд нь функц үүсгэхгүйгээр нэг функ дортоо оруулах боломжтой юу?
//Хэрэв боломжтой бол нөхцөл шалгах If ашиглахуу? Функцуудын доторхоор нөхцөл шалгадаг уу?
