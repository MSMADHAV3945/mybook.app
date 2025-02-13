var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup-box");
var addBtn = document.getElementById("add-btn");


addBtn.addEventListener("click", function(){
    overlay.style.display = "block"
    popup.style.display = "block"
})
// selecting cancel btn to prevent auto refresh load
var cancelButton = document.getElementById("cancel-btn")

cancelButton.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display = "none"
    popup.style.display = "none"
})


// selecting container to add books and input tags to get...

var container = document.querySelector(".container");
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-descrip")
var savebutton = document.getElementById("save-btn")

savebutton.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
            <h3>${bookauthor.value}</h3>
            <p>${bookdescription.value}</p>
            <button class="delete-btn" onclick="deletebook(event)" >Delete</button>`
            container.append(div);
            overlay.style.display = "none"
            popup.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}

