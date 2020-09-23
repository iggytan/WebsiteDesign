const name = document.getElementById('firstname, lastname')
const form = document.getElementById('form')

/* This is to validate for a name */
form.addEventListener('submit'), (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
}

/* This is to validate the email */
function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}
