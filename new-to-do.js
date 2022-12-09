let select = document.getElementById('selectUsernames')
function selectUserName () {
    fetch('http://localhost:8083/api/users')
    .then((response) => response.json())
    .then(usernames => {
        console.log(usernames);
        for( let i = 0; usernames.length; i++){
            let opt = usernames[i].username;
            let userEl = document.createElement('option');
            userEl.textContent = opt;
            userEl.value = opt;
            select.appendChild(userEl);
        }
    })

}

selectUserName();