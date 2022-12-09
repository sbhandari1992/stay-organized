<<<<<<< HEAD
// let select = document.getElementById('selectUsernames')
// function selectUserName () {
//     fetch('http://localhost:8083/api/users')
//     .then((response) => response.json())
//     .then(usernames => {
//         console.log(usernames);
//         for( let i = 0; usernames.length ; i++){
//             let opt = usernames[i].username;
//             let userEl = document.createElement('option');
//             userEl.textContent = opt;
//             userEl.value = opt;
//             select.appendChild(userEl);
//         }
//     })

// }

// selectUserName();
=======
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
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let catOpts = new Option(data[i].name);
                catOpts.value = data[i].userid;
                selectCat.appendChild(catOpts);
            }
        })
};
displayCategories();


>>>>>>> main
