
function submitHandler(event){
    event.preventDefault()
    let Name= event.target.name.value;
    let Email = event.target.email.value;
    let Number= event.target.number.value;
    console.log(Name);
    console.log(Email);
    console.log(Number );
    localStorage.setItem('username',Name);
    localStorage.setItem('email',Email);
    localStorage.setItem('number',Number);
    
}   