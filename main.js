const con=document.querySelector('.con');


for(let i=1;i<=100;i++){
  const para = document.createElement("div");
  para.classList.add("box1");
  const colorcode =getRandomColor();
  para.style.backgroundColor=colorcode;
  para.innerHTML = colorcode;
  con.appendChild(para);
}


function  getRandomColor(){
  const hexcode ='0123456789abcdef';
  let color='#';
  for(let j=0;j<6;j++){
    color+=hexcode[Math.floor(Math.random()*16)];
  }

  return color;
}




