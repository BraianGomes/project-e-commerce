    function changeSize() {
        if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }  
}
    function clickMenu() {
        if (itens.style.display =='block'){
            itens.style.display = 'none'
        } else {
            itens.style.display = 'block'
        }
    }


    function changeImage(){
        var img = document.querySelector('#larges');
        img.src = './images/headwhitelarge.png';
    }

    /*
    function changeImage(){
        let displayImage = document.getElementById('mouseAlt')
        if (displayImage.src.match('./images/headblue.png')){
            displayImage.src = './images/headbluelarge.png'
        } else{
            displayImage.src = './images/headblue.png'
        }
    }

function changeImage(fileName){
    let img = document.querySelector("#row3");
    img.setAttribute("src", fileName);
}    
/////////////////////////////////////////////////////////////////
function mouseOverBlue(){
    document.getElementById("row1").src = "images/headbluelarge.png";
}

function mouseOutBlue(){
    document.getElementById("row1").src = "images/headblue.png";
}


<img onmouseover="mouseOverBlue()" onmouseout="mouseOutBlue()" id="mouseAlt" src="images/headblue.png" alt="Head Phone Blue" onclick="changeImage()">



function changeImage(){
    let displayImage = document.getElementById('mouseAlt')
    if (displayImage.src.match('./images/headblue.png')){
        displayImage.src = './images/headbluelarge.png'
    } else{
        displayImage.src = './images/headblue.png'
    }
}
*/
