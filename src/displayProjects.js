import { myProjects, currentFolderName } from "./addProject";

export function displayMyProject(){
    let x = myProjects.length-1;
    const content= document.getElementById('contentBody');
    const toDoProj = document.createElement("div");
    toDoProj.classList.add('toDoProj');
    toDoProj.id = `toDoProj${x}`;
    // create the left-side project container
    const leftsideProj = document.createElement("div");
    leftsideProj.id = "leftsideProj";
    // create the checkbox input element
    const projComplete = document.createElement("input");
    projComplete.type = "checkbox";
    projComplete.id = "ProjComplete";
    leftsideProj.appendChild(projComplete);
    // create the project title element
    const projTitle = document.createElement("div");
    projTitle.id = "projTitle";
    projTitle.textContent = myProjects[x].title;
    leftsideProj.appendChild(projTitle);
    // create the right-side project container
    const rightsideProj = document.createElement("div");
    rightsideProj.id = "rightsideProj";
    // create the project details button
    const projectDetails = document.createElement("button");
    projectDetails.id = "projectDetails";
    projectDetails.textContent = "Details";
    rightsideProj.appendChild(projectDetails);
    // create the project due date element
    const projDueDate = document.createElement("div");
    projDueDate.id = "projDueDate";
    projDueDate.textContent = myProjects[x].date;
    rightsideProj.appendChild(projDueDate);
    // create the cancel project button
    const cancelProj = document.createElement("button");
    cancelProj.id = "cancelProj";
    cancelProj.textContent = "X";
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
//doesnt just append last project appends all
export function organizeProjectFolder(){
    const contentBody= document.getElementById('contentBody');
    contentBody.innerText='';
    const generalFolder= document.getElementById('generalFolder');
    for (let i=0; i<myProjects.length; i++){
      if(myProjects[i].folder===currentFolderName){  
            const content= document.getElementById('contentBody');
            const toDoProj = document.createElement("div");
            toDoProj.classList.add('toDoProj');
            toDoProj.id = `toDoProj${i}`;
            // create the left-side project container
            const leftsideProj = document.createElement("div");
            leftsideProj.id = "leftsideProj";
            // create the checkbox input element
            const projComplete = document.createElement("input");
            projComplete.type = "checkbox";
            projComplete.id = "ProjComplete";
            leftsideProj.appendChild(projComplete);
            // create the project title element
            const projTitle = document.createElement("div");
            projTitle.id = "projTitle";
            projTitle.textContent = myProjects[i].title;
            leftsideProj.appendChild(projTitle);
            // create the right-side project container
            const rightsideProj = document.createElement("div");
            rightsideProj.id = "rightsideProj";
            // create the project details button
            const projectDetails = document.createElement("button");
            projectDetails.id = "projectDetails";
            projectDetails.textContent = "Details";
            rightsideProj.appendChild(projectDetails);
            // create the project due date element
            const projDueDate = document.createElement("div");
            projDueDate.id = "projDueDate";
            projDueDate.textContent = myProjects[i].date;
            rightsideProj.appendChild(projDueDate);
            // create the cancel project button
            const cancelProj = document.createElement("button");
            cancelProj.id = "cancelProj";
            cancelProj.textContent = "X";
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
        projComplete.id = "ProjComplete";
        leftsideProj.appendChild(projComplete);
        // create the project title element
        const projTitle = document.createElement("div");
        projTitle.id = "projTitle";
        projTitle.textContent = myProjects[i].title;
        leftsideProj.appendChild(projTitle);
        // create the right-side project container
        const rightsideProj = document.createElement("div");
        rightsideProj.id = "rightsideProj";
        // create the project details button
        const projectDetails = document.createElement("button");
        projectDetails.id = "projectDetails";
        projectDetails.textContent = "Details";
        rightsideProj.appendChild(projectDetails);
        // create the project due date element
        const projDueDate = document.createElement("div");
        projDueDate.id = "projDueDate";
        projDueDate.textContent = myProjects[i].date;
        rightsideProj.appendChild(projDueDate);
        // create the cancel project button
        const cancelProj = document.createElement("button");
        cancelProj.id = "cancelProj";
        cancelProj.textContent = "X";
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