let select = document.getElementById('selectNames')
function displayNames() {
    fetch('http://localhost:8083/api/todos')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let nameOpts = document.createElement('option');
                nameOpts.textContent = data[i].name;
                nameOpts.value = data[i].userid;
                select.appendChild(nameOpts);
            }
        })
};
displayNames();