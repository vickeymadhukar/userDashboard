const toggleside= document.getElementById("togglebutton");
const sidebar=document.getElementById('sidebar');

function togglesidebar(){
    sidebar.classList.toggle('close');
    toggleside.classList.toggle('rotate');
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    })
}

function togglemenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if(sidebar.classList.toggle('close')){
        sidebar.classList.toggle('close');
        toggleside.classList.toggle('rotate');
    }
}