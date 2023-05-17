function submitHandler(event){
    event.preventDefault()
    let Email = document.getElementById('Email-id').value;
    let Name = document.getElementById('User-name').value;
    let Dob = document.getElementById('dateOfbirth').value;
    let cityName = document.getElementById('City').value;

    let obj = {Email,Name,Dob,cityName}
    localStorage.setItem(obj.Email, JSON.stringify(obj));
    


}