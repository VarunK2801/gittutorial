
function submitHandler(event){
    event.preventDefault()
    let Name= event.target.name.value;
    let Email = event.target.email.value;
    let Number= event.target.number.value;
    // console.log(Name);
    // console.log(Email);
    // console.log(Number );
    //localStorage.setItem('username',Name);
   // localStorage.setItem('email',Email);
   // localStorage.setItem('number',Number);
    const obj ={Name,Email,Number}
   // localStorage.setItem('userDetails',JSON.stringify(obj));
    localStorage.setItem(obj.Email, JSON.stringify(obj));
    
    showNewUserOnScreen(obj);

}   
function showNewUserOnScreen(user){
    const parentNode = document.getElementById('list-of-users');
    const childHTML = `<li id= ${user.Email}> ${user.Email} - ${user.Name} - ${user.Number}
    <button onclick=deleteUser('${user.Email}') id='dbtn'> Delete User </button>
    <button onclick=editUser('${user.Email}','${user.Name}','${user.Number}')> Edit user </button>
    
     </li>`

    parentNode.innerHTML = parentNode.innerHTML +childHTML;
    document.getElementById('name').value= "";
    document.getElementById('number').value= "";
    document.getElementById('email').value="";
}


function deleteUser(Email){
    //console.log(Email)
    localStorage.removeItem(Email);
    removeUserFromScreen(Email);

}   

function removeUserFromScreen(Email){
    const parentNode = document.getElementById('list-of-users');
    const childNodeToBeDeleted = document.getElementById(Email);

    parentNode.removeChild(childNodeToBeDeleted)
}

function editUser(Email,Name,Number) {
    document.getElementById('email').value=Email;
    document.getElementById('name').value=Name;
    document.getElementById('number').value= Number;
   // console.log(Email,Name,Number)
    

    deleteUser(Email)

}

