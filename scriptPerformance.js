window.onload = () => {
 
    hrmoto = document.getElementsByTagName("hr")[1];
    hrmoto.style.backgroundColor = "#ff0000a9";

    document.body.addEventListener("keydown", keyDownListener);

    function keyDownListener(event) {
        if (event.keyCode == "39")
            window.location.href = "garage.html";
        else if (event.keyCode == "37")
            window.location.href = "design.html";
    }


}