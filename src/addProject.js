const formBox= document.getElementById('formBox');
const noteBox= document.getElementById('noteBox');
let addProjSwitch= true;
let addNoteSwitch=true;
//Project form appears
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
//Note form appears
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
        document.getElementById('noteTitle').value= '';
        document.getElementById('noteDescription').value='';
    }
}
//collect Note data
let myNotepad=[]
export function getNotepad(){
    console.log(myNotepad);
    return {myNotepad}
}
export function submitNote(event){
    let noteTitle= document.getElementById('noteTitle').value;
    let noteDescription= document.getElementById('noteDescription').value;
    function noteData(noteTitle, noteDescription){
        this.title= noteTitle;
        this.description= noteDescription;
    }
    myNotepad.push(
        new noteData(noteTitle, noteDescription)
    )
    event.preventDefault();
    addNote();
    console.log(myNotepad);
}