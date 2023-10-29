window.onload = function() {

    const username = document.getElementById('name');
    const password = document.getElementById('password');
    const dateofbirth = document.getElementById('dob');


    const myForm = document.getElementById("form");

    var key = "user";
    var inputUsername = "";
    var inputPassword = "";
    var inputDateofbirth = "";

    
    
    
    username.addEventListener('input', usernameChange);
    password.addEventListener('input', passwordChange);
    dateofbirth.addEventListener('input', dateofbirthChange);
    
    myForm.addEventListener('submit', handleSubmit);
    
    function usernameChange(event){
        inputUsername = event.target.value;
    }

    function passwordChange(event){
        inputPassword = event.target.value;
    }
    
    function dateofbirthChange(event){
        inputDateofbirth = event.target.value;
    }
    
    // var appended = false;

    var ld = document.getElementById('lastDiv');
    var small = document.createElement("SMALL");

    function handleSubmit(event){
        event.preventDefault();

        
        var usernameREG = /^[A-Za-z0-9]+$/;
        
        var usernameResult = usernameREG.test(inputUsername);
        inputDateofbirth = new Date(inputDateofbirth);
        var currentDate = new Date();


        if (inputDateofbirth.getFullYear() < 1920 || inputDateofbirth.getFullYear() > currentDate.getFullYear()){
            small.style.color = "red";
            small.innerText = "Year for sure incorrect.";
            ld.appendChild(small);
            return;
        }

        if (inputPassword.length < 6 ){
            small.style.color = "red";
            small.innerText = "Password must be more than 5 characters."
            ld.appendChild(small);
            return;
        }
        
        if (usernameResult){
            const array = [inputUsername, inputPassword, inputDateofbirth];
            
            const arrayString = JSON.stringify(array);
            sessionStorage.setItem(key, arrayString);
            

            // if (appended == true)
            //     ld.removeChild(small);

            small.style.color = "green";
            small.innerText = "Successfully connected!";

            ld.appendChild(small);
            setTimeout(function(){
                
                window.location.href = "index.html";
                
            }, 1500);
        }
        else{
            small.style.color = "red";
            small.innerText = "Invalid Username!";
            ld.appendChild(small);
            return;
            // if (appended == false){
            //     ld.appendChild(small);
            //     appended = true;
            // }
        }
    }



}