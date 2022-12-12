let  selectUsernames = document.getElementById('selectUsernames');
let displayData = document.getElementById('displayData');

let allUserUrl = 'http://localhost:8083/api/users';
let allToDosUrl = 'http://localhost:8083/api/todos';
let allCategories = 'http://localhost:8083/api/categories'


fetch(allUserUrl)
.then(response => response.json())
.then(data => {
    // data.forEach(ar => {
    //     let nameOpt = new Option(ar.name);
    //     selectUsernames.appendChild(nameOpt);
    // });
    for (let i = 0; i < data.length; i++) {
        let nameOpts = document.createElement('option');
        nameOpts.textContent = data[i].name;
        nameOpts.value = data[i].name;
        selectUsernames.appendChild(nameOpts);
    }

    selectUsernames.onchange = getUserAndDisplayToDoList;

    function getUserAndDisplayToDoList() {
        data.forEach(ar => {
            if (selectUsernames.value == ar.name) {
                let iD = ar.id;
                fetch(allToDosUrl + '/' + iD)
                       .then(response => response.json())
                       .then(data => {
                        displayData.innerHTML = " ";
 
                        let userID = document.createElement('p');
                        userID.innerHTML = `userID: ${data.userid}`;
                        displayData.appendChild(userID);

                        let Category = document.createElement('p');
                        Category.innerHTML = `Category: ${data.category}`;
                        displayData.appendChild(Category);

                        let Description = document.createElement('p');
                        Description.innerHTML = `Description: ${data.description}`;
                        displayData.appendChild(Description);

                        let Deadline = document.createElement('p');
                        Deadline.innerHTML = `Deadline: ${data.deadline}`;
                        displayData.appendChild(Deadline);

                        let Priority = document.createElement('p');
                        Priority.innerHTML = `Priority: ${data.priority}`;
                        displayData.appendChild(Priority);

                        let Completed = document.createElement('p');
                        data.completed = false ? Completed.innerHTML = "YES" : Completed.innerHTML = "NO"; // don't understand why is working oppositely
                        Completed.innerHTML = `Completed: ${data.completed}`;
                        displayData.appendChild(Completed);


                       })

            }

        })
         
    }
})





