window.onload = () => {
 
    hrmoto = document.getElementsByTagName("hr")[0];
    hrmoto.style.backgroundColor = "#ff0000a9";

    var yH = document.getElementById("yamahaHistory");
    yH.style.border = "2px dashed red";
    yH.style.padding = "20px";

    document.body.addEventListener("keydown", keyDownListener);

    function keyDownListener(event) {
        if (event.keyCode == "39")
            window.location.href = "equipment.html";
            
    }

    key = "user";
    var login = document.getElementById('login');
    var profile = document.getElementById('profile');
    var popup = document.getElementById('popup');
    var main = document.getElementById('index');

    var sem = true;

    var small = document.getElementById('fp');
    var ok = document.getElementById('ok');
    const passHidden = '*';
    if (sessionStorage.getItem(key)){
        login.style.display = "none";
        profile.style.display = "block";
        profile.addEventListener('click', function(){
            main.style.opacity = "0.2";
            popup.classList.add('open-popup');
            if (sem == true){
                sem = false;
                var c = sessionStorage.getItem(key);
                var c1 = JSON.parse(c);
                popup.children[1].innerHTML += ' ' + c1[0];
                popup.children[2].innerHTML += ' ' +  passHidden.repeat(c1[1].length);

                c1[2] = new Date(c1[2]);
                var month = c1[2].getMonth() + 1;
                popup.children[3].innerHTML += ' ' + c1[2].getFullYear() + '/' + month + '/' + c1[2].getDate();
                
                small.addEventListener('click', function(){
                    popup.children[2].innerText = '';
                    popup.children[2].innerText = 'Password: ' + c1[1];
                })

                ok.addEventListener('click', function(){
                    popup.classList.remove('open-popup');
                    main.style.opacity = "1";
                })

                document.body.addEventListener('keydown', function(event){
                    if (event.key === 'Enter'){
                        popup.classList.remove('open-popup');
                        main.style.opacity = "1";                    }
                });

            }
        });
    }
    else{
        login.style.display = "block";
        profile.style.display = "none";
        
    }

    } 
