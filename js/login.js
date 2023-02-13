// step-:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-:2 get the email address inside the input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get the password
    // 3.a: set the id on the html element
    // b: get the element
    // c: get the value from the element
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    // DANGER: DO not verify email password on the client side
    // Step-4:Verify email and password and check weather valid or not
    if (email === 'ami@tumi.com' && pass === 'asdfg') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user password vuuulll')
    }


})