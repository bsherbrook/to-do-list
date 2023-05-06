const formBox= document.getElementById('formBox');
let addProjSwitch= true;

export function addProj(){
    if (addProjSwitch=== true){
        formBox.style.transition='opacity .6s ease-in';
        formBox.style.opacity='100%';
        addProjSwitch=false;
    }
    else{
        formBox.style.opacity='0';
        addProjSwitch=true;
    }
}