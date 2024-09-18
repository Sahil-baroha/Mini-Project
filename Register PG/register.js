
let users =  JSON.parse(localStorage.getItem('users')) || [];
function registerUser(event) {
    event.preventDefault(); 
    const selectField = document.getElementById('Register-as').value;
    const username = document.getElementById('username-id').value;
    const email = document.getElementById('email-id').value;
    const phoneNumber = document.getElementById('phoneNumber1-id').value;
    const secondaryPhoneNumber = document.getElementById('SecondaryPhoneNumber-id').value;
    const password = document.getElementById('password-id').value;
    const confirmPassword = document.getElementById('confirmPassword-id').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    const newUser = {
        selectField: selectField,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        secondaryPhoneNumber: secondaryPhoneNumber,
        password: password
    };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    document.getElementById('container').reset();

    alert('registered successfully');
}
document.getElementById('container').addEventListener('submit', registerUser);
