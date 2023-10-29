window.onload = () => {

    hrmoto = document.getElementsByTagName("hr")[2];
    hrmoto.style.backgroundColor = "#fff";


    document.body.addEventListener("keydown", keyDownListener);

    function keyDownListener(event) {
        if (event.keyCode == "39")
            window.location.href = "about.html";
        else if (event.keyCode == "37")
            window.location.href = "garage.html";
    }


}