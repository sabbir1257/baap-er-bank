// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailFild = document.getElementById('user-email'); 
    const email = emailFild.value;
    // step-3: get password
    // 3.a: set id on the html
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    
    // DANGER : Do not verify email password on the client side
    // step-4: verify email and password and check whether valid user or not
    if(email === 'masabbir1257@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid user');
    }
})