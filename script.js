const notesContainer = document.querySelector(".notesContainer");
const button = document.querySelector(".btn");
let notes = document.querySelectorAll("input-Box")


button.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-Box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "letter-x.png";
    inputBox.appendChild(img); 
    notesContainer.appendChild(inputBox); 
});

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        store()
    } else if( e.target.tagName === "P"){
        notes = document.querySelectorAll("input-Box")
        notes.forEach(nt =>{
            nt.onkeyup = function (){
                store()
            }
        })
    }
})

function store(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}

function showStore(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showStore();