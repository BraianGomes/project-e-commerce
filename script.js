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

    function clickblue(){
        document.getElementById("back").src = "./images/headbluelarge.png";
    }

    function clickblack(){
        document.getElementById("back").src = "./images/headblacklarge.png";
    }

    function clickwhite(){
        document.getElementById("back").src = "./images/headwhitelarge.png";
    }

