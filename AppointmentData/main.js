function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    //localStorage.setItem('name', name);
    //localStorage.setItem('email', email);

    const obj = {
        name,
        email,
        mobile
    }


    axios.post("https://crudcrud.com/api/9a308f5019bf4607859368db73e5ae6a/appiontmentData", obj)
        .then((response) => {
            
            showNewUserOnScreen(response.data); 
            console.log(response);
        })
        .catch((error) => {
            document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong</h4>'
            console.log(error);   
        })

    showNewUserOnScreen(obj);
    
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/9a308f5019bf4607859368db73e5ae6a/appiontmentData")
        .then((response) => {
            console.log(response);

            for (var i=0; i<response.data.length; i++) {
                showNewUserOnScreen(response.data[i]);
            }
        })

        .catch((error) => {
            console.log(error);
        })
})


function showNewUserOnScreen (user) {

    document.getElementById('email').value='';
    document.getElementById('name').value='';
    document.getElementById('mobile').value='';


    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.mobile}
        <button onclick=deleteUser('${user.email}')> Delete User </button> 
        <button onclick=editUser('${user.email}','${user.name}','${user.mobile}')> Edit User </button>
        </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}   

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}

function editUser(emailId, name, mobile) {
    document.getElementById('email').value=emailId;
    document.getElementById('name').value=name;
    document.getElementById('mobile').value=mobile;

    deleteUser(emailId)

}