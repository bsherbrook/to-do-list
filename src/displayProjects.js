import { myProjects, currentFolderName, addProj } from "./addProject";

export function displayMyProject(){
    let x = myProjects.length-1;
    const content= document.getElementById('contentBody');
    content.style.display='block';
    const toDoProj = document.createElement("div");
    toDoProj.classList.add('toDoProj');
    toDoProj.id = `toDoProj${x}`;
    // create the left-side project container
    const leftsideProj = document.createElement("div");
    leftsideProj.id = "leftsideProj";
    // create the checkbox input element
    const projComplete = document.createElement("input");
    projComplete.type = "checkbox";
    projComplete.id = `${x}`;
    projComplete.checked=myProjects[x].status;
    projComplete.addEventListener('click', strikeText);
   
    leftsideProj.appendChild(projComplete);
    // create the project title element
    const projTitle = document.createElement("div");
    projTitle.id = `projTitle${x}`;
    projTitle.textContent = myProjects[x].title;
    leftsideProj.appendChild(projTitle);
    // create the right-side project container
    const rightsideProj = document.createElement("div");
    rightsideProj.id = "rightsideProj";
    // create the project details button
    const projectDetails = document.createElement("button");
    projectDetails.id = `${x}`;
    projectDetails.textContent = "Details";
    projectDetails.addEventListener('click', showDetails);
    rightsideProj.appendChild(projectDetails);
    // create the project due date element
    const projDueDate = document.createElement("div");
    projDueDate.id = "projDueDate";
    projDueDate.textContent = myProjects[x].date;
    rightsideProj.appendChild(projDueDate);
    // create the cancel project button
    const cancelProj = document.createElement("button");
    cancelProj.id = `${x}`;
    cancelProj.classList.add('cancelProjButton');
    cancelProj.textContent = "X";
    cancelProj.addEventListener('click',cancelToDo);
    rightsideProj.appendChild(cancelProj);
    // add the left and right containers to the main div container
    toDoProj.appendChild(leftsideProj);
    toDoProj.appendChild(rightsideProj);
    // add the main div container to the document body
    content.appendChild(toDoProj);
    //if high priority project style element
    if(myProjects[x].priority===true){
        toDoProj.style.border= '3px solid red';
    }
}
function strikeText(event){
    let x=event.target.id;
    let checkedToDo= document.getElementById(`toDoProj${x}`);
    let toDoTitleText= document.getElementById(`projTitle${x}`).textContent;
    if(myProjects[x].status===false){
        checkedToDo.style.border= 'inset';
        myProjects[x].status=true;
        document.getElementById(`projTitle${x}`).innerHTML=`<del>${toDoTitleText}</del>`;
    }   else{
        document.getElementById(`projTitle${x}`).innerHTML=`${toDoTitleText}`;
        checkedToDo.style.border= '1px solid black';
        myProjects[x].status=false;
    }

}
//doesnt just append last project appends all
export function organizeProjectFolder(){
    const contentBody= document.getElementById('contentBody');
    contentBody.innerText='';
    for (let i=0; i<myProjects.length; i++){
      if(myProjects[i].folder===currentFolderName){  
            const content= document.getElementById('contentBody');
            content.style.display='block';
            const toDoProj = document.createElement("div");
            toDoProj.classList.add('toDoProj');
            toDoProj.id = `toDoProj${i}`;
            // create the left-side project container
            const leftsideProj = document.createElement("div");
            leftsideProj.id = "leftsideProj";
            // create the checkbox input element
            const projComplete = document.createElement("input");
            projComplete.type = "checkbox";
            projComplete.checked=myProjects[i].status;
            projComplete.id = `${i}`;
            projComplete.addEventListener('click', strikeText);
            
            leftsideProj.appendChild(projComplete);
            // create the project title element
            const projTitle = document.createElement("div");
            projTitle.id = `projTitle${i}`;
            projTitle.textContent = myProjects[i].title;
            if(projComplete.checked===true){
                toDoProj.style.border='inset';
                projTitle.innerHTML= `<del>${myProjects[i].title}</del>`;
            }
            leftsideProj.appendChild(projTitle);
            // create the right-side project container
            const rightsideProj = document.createElement("div");
            rightsideProj.id = "rightsideProj";
            // create the project details button
            const projectDetails = document.createElement("button");
            projectDetails.id = `${i}`;
            projectDetails.textContent = "Details";
            projectDetails.addEventListener('click', showDetails);
            rightsideProj.appendChild(projectDetails);
            // create the project due date element
            const projDueDate = document.createElement("div");
            projDueDate.id = "projDueDate";
            projDueDate.textContent = myProjects[i].date;
            rightsideProj.appendChild(projDueDate);
            // create the cancel project button
            const cancelProj = document.createElement("button");
            cancelProj.id = `${i}`;
            cancelProj.textContent = "X";
            cancelProj.classList.add('cancelProjButton');
            cancelProj.addEventListener('click',cancelToDo);
            rightsideProj.appendChild(cancelProj);
            // add the left and right containers to the main div container
            toDoProj.appendChild(leftsideProj);
            toDoProj.appendChild(rightsideProj);
            // add the main div container to the document body
            content.appendChild(toDoProj);
            //if high priority project style element
            if(myProjects[i].priority===true){
                toDoProj.style.border= '3px solid red';
            }
        }    
    }
}
export function displayGeneral(){
    const content= document.getElementById('contentBody');
    content.innerText='';
    content.style.display='block';
    for (let i=0; i<myProjects.length; i++){
        //const content= document.getElementById('contentBody');
        const toDoProj = document.createElement("div");
        toDoProj.classList.add('toDoProj');
        toDoProj.id = `toDoProj${i}`;
        // create the left-side project container
        const leftsideProj = document.createElement("div");
        leftsideProj.id = "leftsideProj";
        // create the checkbox input element
        const projComplete = document.createElement("input");
        projComplete.type = "checkbox";
        projComplete.checked= myProjects[i].status;
        projComplete.id = `${i}`;
        projComplete.addEventListener('click', strikeText);

        leftsideProj.appendChild(projComplete);
        // create the project title element
        const projTitle = document.createElement("div");
        projTitle.id = `projTitle${i}`;
        projTitle.textContent = myProjects[i].title;
        if(projComplete.checked===true){
            toDoProj.style.border='inset';
            projTitle.innerHTML= `<del>${myProjects[i].title}</del>`;
        }
        leftsideProj.appendChild(projTitle);
        // create the right-side project container
        const rightsideProj = document.createElement("div");
        rightsideProj.id = "rightsideProj";
        // create the project details button
        const projectDetails = document.createElement("button");
        projectDetails.id = `${i}`;
        projectDetails.textContent = "Details";
        projectDetails.addEventListener('click', showDetails);
        rightsideProj.appendChild(projectDetails);
        // create the project due date element
        const projDueDate = document.createElement("div");
        projDueDate.id = "projDueDate";
        projDueDate.textContent = myProjects[i].date;
        rightsideProj.appendChild(projDueDate);
        // create the cancel project button
        const cancelProj = document.createElement("button");
        cancelProj.id = `${i}`;
        cancelProj.textContent = "X";
        cancelProj.classList.add('cancelProjButton');
        cancelProj.addEventListener('click',cancelToDo);
        rightsideProj.appendChild(cancelProj);
        // add the left and right containers to the main div container
        toDoProj.appendChild(leftsideProj);
        toDoProj.appendChild(rightsideProj);
        // add the main div container to the document body
        content.appendChild(toDoProj);
        //if high priority project style element
        if(myProjects[i].priority===true){
            toDoProj.style.border= '3px solid red';
        }         
    }   
}
function cancelToDo(x){
    let target= x.target.id;
    myProjects.splice(target,1);
    if (currentFolderName==='General'){
        displayGeneral();
    }
    else{
        organizeProjectFolder();
    }
}
let detailsSwitch= true;
let targetToDo;
export {targetToDo};
function showDetails(x){
    targetToDo= x.target.id
    const title= document.getElementById('modalTitleData');
    const folder= document.getElementById('modalFolderData');
    const date= document.getElementById('modalDateData');
    const priority= document.getElementById('modalPriorityData');
    const details= document.getElementById('modalDetailsData');
    const modalDetails= document.getElementById('modalDetails');
    if(detailsSwitch===true){
        modalDetails.style.transition = "opacity .6s ease-in";
        modalDetails.style.display = "flex";
        modalDetails.style.opacity = "100%";
        modalDetails.style.zIndex = "1";
        title.innerText= myProjects[targetToDo].title;  //innerhtml?
        folder.innerText= myProjects[targetToDo].folder;
        date.innerText= myProjects[targetToDo].date;
        priority.innerText=myProjects[targetToDo].priority;
        details.innerText= myProjects[targetToDo].description;
        detailsSwitch=false;
    }
    else{
        modalDetails.style.opacity = "0";
        modalDetails.style.zIndex = "-1";
        detailsSwitch=true;
    }    
}
//close the Details modal
const cancelModalDetails= document.getElementById('cancelModalDetails');
cancelModalDetails.addEventListener('click', cancelModalDeets)
function cancelModalDeets(){
    modalDetails.style.opacity = "0";
    modalDetails.style.zIndex = "-1";
    detailsSwitch=true;    
};
const editModalDetails= document.getElementById('editModalDetails');
let editDetailsSwitch=false;
let tempfolder='';
export { editDetailsSwitch, tempfolder }
editModalDetails.addEventListener('click',()=>{
    editDetailsSwitch=true;
    cancelModalDeets();
    addProj();
    document.getElementById("projectTitle").value = `${myProjects[targetToDo].title}`;
    document.getElementById("projectDescription").value = `${myProjects[targetToDo].description}`;
    document.getElementById("dueDate").value = `${myProjects[targetToDo].date}`;
    document.getElementById("priority").checked = myProjects[targetToDo].priority;
    tempfolder=myProjects[targetToDo].folder;
})