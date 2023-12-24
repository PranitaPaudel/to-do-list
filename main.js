const inputBox = document.querySelector('.input');
const listContainer = document.querySelector('.task-list');
let button = document.querySelector('.add-button');
button.addEventListener('click', ()=>{
    if(inputBox.value == ""){
        alert("You have to write something!");
    }
    else{
        let task = inputBox.value;
        let listItem = document.createElement('li');
        listItem.textContent = task;
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    saveData();
    inputBox.value = "";
})
listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
getData();