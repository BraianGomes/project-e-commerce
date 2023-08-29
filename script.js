
function mouseOver(){
    document.getElementById("mouseAlt").src = "images/headblue.png";
}

function mouseOut(){
    document.getElementById("mouseAlt").src = "images/headblack.png";
}

function changeImage(){
    let displayImage = document.getElementById('mouseAlt')
    if (displayImage.src.match('./images/headblue.png')){
        displayImage.src = './images/headblack.png'
    } else{
        displayImage.src = './images/headblue.png'
    }
}

