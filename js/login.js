document.getElementById('btn-login').addEventListener('click',function(event){

    event.preventDefault();
    console.log('Login Button Clicked')
    const phonenumber = document.getElementById('Phone-number').value;
    
    const pinNumber = document.getElementById('Pin-no').value;
    console.log(phonenumber);
    console.log(pinNumber);
    function validatePhoneAndPin(phonenumber, pinNumber) {
       
        if (phonenumber.length === 10 && /^[0-9]+$/.test(phonenumber)) {
            
            if (pinNumber.length === 4 && /^[0-9]+$/.test(pinNumber)) {
                window.location.href = 'home.html';
                return "Phone number and PIN are valid.";
               
            } else {
                return "Invalid PIN. PIN should be 4 digits.";
            }
        } else {
            return "Invalid phone number. Phone number should be 10 digits.";
        }
    }
    
    
    const result = validatePhoneAndPin(phonenumber, pinNumber);
    console.log(result);
})