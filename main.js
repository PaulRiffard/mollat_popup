let showPopUp = false
const body = document.getElementById('body')
const popup = document.getElementById('popup')
const content = document.getElementById('popup1')
const pageTwo = document.getElementById('popup2')

function togglePopUp(page){
    showPopUp = !showPopUp
    if(showPopUp){
        body.classList.add('body_disabled')
        popup.classList.remove("disabled");
    
    }else{
        popup.classList.add('disabled')
        body.classList.remove("body_disabled");
    }
    if(page == 'pageTwo'){
        content.classList.remove('disabled')
        pageTwo.classList.add('disabled')

    }
}

function toggleClassStyle(id){
    const style  = document.getElementById(id);
    style.classList.toggle("li_selected");
}

function changePage(){
    content.classList.add('disabled')
    pageTwo.classList.remove('disabled')
}