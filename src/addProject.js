const formBox= document.getElementById('formBox');
const noteBox= document.getElementById('noteBox');
let addProjSwitch= true;
let addNoteSwitch=true;
export function addProj(){
    if (addNoteSwitch===false){addNote()}
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
export function addNote(){
    if(addProjSwitch===false){addProj()}
    if (addNoteSwitch===true){
        noteBox.style.transition='opacity .6s ease-in';
        noteBox.style.opacity='100%';
        addNoteSwitch=false;
    }
    else{
        noteBox.style.opacity='0';
        addNoteSwitch=true;
    }
}