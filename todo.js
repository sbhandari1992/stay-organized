let  allUserUrl = 'http://localhost:8083/api/users';
let allToDoUrl = 'http://localhost:8083/api/todos';


fetch(allUserUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
    let nameOpt = new Option();
    console.log(nameOpt);
})




