
let select = document.getElementById('selectUsernames')
function displayUsernames() {
    fetch('http://localhost:8083/api/users')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let nameOpts = document.createElement('option');
                nameOpts.textContent = data[i].username;
                nameOpts.value = data[i].id; 
                select.appendChild(nameOpts);
            }
        })
};
displayUsernames();

let selectCat = document.getElementById('selectCategory');
function displayCategories() {
    fetch('http://localhost:8083/api/categories')
        .then((response) => response.json())
        .then(data => {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                let catOpts = new Option(data[i].name);
                catOpts.value = data[i].name;
                selectCat.appendChild(catOpts);
            }
        })
};
displayCategories();


let newToDoForm = document.getElementById('newToDoForm');
console.log(newToDoForm);

let  allUserUrl = 'http://localhost:8083/api/users';
let allToDoUrl = 'http://localhost:8083/api/todos';
let toDoUrlByID = "http://localhost:8083/api/todos/byuser/";

newToDoForm.addEventListener('submit', getAndSendData);

let formJSON;

function getAndSendData(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);
    console.log(data.entries());   // transform a list to key value pairs
    formJSON = Object.fromEntries(data.entries());
    console.log(formJSON);
   postData(); 
}

function postData() {
    fetch( allToDoUrl,{
            method: "POST",
            body: JSON.stringify(formJSON),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            // console.log(json.status);
        })
        .catch(error => {
            console.log(error);
            'Unexpected Error';
        })
}


