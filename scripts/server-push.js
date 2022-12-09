const form= document.getElementById('addToDo')
form.addEventListener('submit', getData)
let formJSON;
function getData(evt){
    evt.preventDefault();
    const data=new FormData(evt.target)
    formJSON=Object.fromEntries(data.entries());
    console.log(formJSON)
    sendData();}
function sendData(){
    fetch('http://localhost:8083/api/todos', {
        method: "POST",
        body: JSON.stringify(formJSON),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
        let confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.innerHTML= "New Course Added" 
    })
    .catch(err => {
        console.log(err)
        confirmationMessage.innerHTML = "Error"
    })}
    //for dropdown menus if needed
fetch('../server/data/categories.json')
    .then((response) => response.json())
    .then(cata =>{
    let catMenu = document.getElementById('category');
    let catAmount = cata.length;
    for (let i = 0; i < catAmount; i++) {
        let option = new Option(cata[i].name);
        catMenu.appendChild(option);
    };})
//     fetch('../server/data/users.json')
//     .then((response) => response.json())
//     .then(cata =>{
//     let catMenu = document.getElementById('userName');
//     let catAmount = cata.length;
//     for (let i = 0; i < catAmount; i++) {
//         let option = new Option(cata[i].username);
//         catMenu.appendChild(option);
//     };})