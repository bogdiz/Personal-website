window.onload = function(){

    document.querySelector("ul.menu").style.display = "none";
    document.body.classList.add("loadingScreen");

    var progressing = document.querySelector("div.progress");
    var numProgressing = document.querySelector("small.numProgress");
    var progress = 0;
    var value = 0;
    var interval = setInterval(function(){
        progress += 5;
        if (progress > 95)
            clearInterval(interval);
        progressing.style.width = progress + "%";
        
    }, 100);

    var numInterval = setInterval(function(){
        if (value < 100)
            value += 1;
        numProgressing.innerHTML = value;
    }, 27);

    var progressBar = document.querySelector("div.progress-bar");

setTimeout(function(){

    progressBar.style.display = "none";
    document.querySelector("ul.menu").style.display = "flex";
    document.body.classList.remove("loadingScreen");

    hrmoto = document.getElementsByTagName("hr")[3];
    hrmoto.style.backgroundColor = "#ff0000a9";

    mainAbout = document.getElementsByClassName("mainAbout")[0];

    var newH1 = document.createElement("H1");
    newH1.innerHTML = "About us";
    mainAbout.appendChild(newH1);
    
    var newArticle = document.createElement("article");
    newArticle.innerHTML = "Welcome to Yamaha, the premier destination for all your motorcycle and motorized product needs. We are a dedicated team of experts who are passionate about providing our customers with the highest quality products, exceptional service, and unbeatable value. At Yamaha, we have a long-standing tradition of innovation and excellence in the motorcycle industry. Our products are designed with the latest technology, ensuring that they are not only powerful and reliable, but also safe and comfortable to ride. Whether you're an experienced rider or just starting out, we have a wide range of motorcycles to suit your needs, from sportbikes to cruisers, dirt bikes to touring bikes, and everything in between. We understand that buying a motorcycle is a big investment, and that's why we're committed to helping our customers make informed decisions. Our team of knowledgeable sales professionals is here to answer any questions you may have about our products, and to help you find the perfect motorcycle to suit your needs and budget. We take pride in providing a personalized, one-on-one buying experience that ensures you get the motorcycle that's right for you. At Yamaha, we are committed to providing our customers with exceptional service, both before and after the sale. We have a team of experienced technicians who are trained to service and repair all of our products, and we offer a range of maintenance and repair services to help keep your motorcycle or other motorized product in top condition."
    mainAbout.appendChild(newArticle);

    
    var willDelete = document.createElement("img");
    willDelete.src = "pictures/cestoasa.jpg";
    document.body.appendChild(willDelete);
    document.body.removeChild(willDelete);
    willDelete.remove();

    

    document.body.addEventListener("keydown", keyDownListener);
    
    function keyDownListener(event) {
        if (event.keyCode == "37"){
            window.location.href = "yamaharacing.html";

        }
    }

    var newH3 = document.createElement("H3");
    newH3.innerText = "Yamaha Logos over the years: "
    document.body.appendChild(newH3);
    newH3.style.margin = "70px";

    var newImg =  document.createElement("IMG");
    newImg.src = "pictures/yamhaLOGOS.jpg";
    newImg.classList.add("imgYamahaLogos");
    document.body.appendChild(newImg);

    newImg.addEventListener("mouseenter", () => {
        newImg.classList.add("newImgYamahaLogos");

    })

    newImg.addEventListener("mouseleave", ()=> {
        newImg.classList.remove("newImgYamahaLogos");
    })
}, 3000);

}
