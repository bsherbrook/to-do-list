const contentCard= document.getElementById('content-card');
const sidebar= document.getElementById('sidebar');

//open and close menu sidebar
let menuSwitch=true;

export function sidebarDisplay(){
  if (menuSwitch===true){
    contentCard.style.gridColumn='1/3';
    sidebar.style.display='none'
    menuSwitch= false;
  }
  else{
    contentCard.style.gridColumn='';
    sidebar.style.display='flex'
    menuSwitch= true;
  }
}