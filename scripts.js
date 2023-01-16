if(!localStorage.getItem("colorMode")){
  localStorage.setItem("colorMode","dark");
}
if(localStorage.getItem("colorMode") == "light"){
  setLightMode();
} else{
  setDarkMode();
}


function showNav() {
  var items = document.getElementsByClassName("navbarItem");
  console.log(items);
  for (let i = 0; i < items.length; i++) {
      if (items[i].style.display === "inline-block" || items[i].style.display === "block") {
        items[i].style.display = "none";
        document.getElementById("navbutton").style.transform = 'rotate(0deg)';
      } else {
        if(window.innerWidth <= 850){
          console.log(window.innerWidth)
          items[i].style.display = "block";
          document.getElementById("navbutton").style.transform = 'rotate(90deg)';
        } else {
          items[i].style.display = "inline-block";
          document.getElementById("navbutton").style.transform = 'rotate(90deg)';
        }
      }
      
  }      
}

function setLightMode(){
  document.getElementById("colorbutton").innerHTML = "<i class=\"fa fa-moon-o fa-3x\"></i>";
  document.getElementById("colorbutton").style.color = "black";
  document.body.style.backgroundColor = "#E6EBE0";
  document.body.style.color = "black";
  document.getElementById("navbar").style.backgroundColor = "#9BC1BC";
  document.getElementById("navbar").style.boxShadow = "0px 5px rgba(126, 160, 155,0.9)";
  document.getElementById("navbutton").style.color = "black";
  document.getElementById("navbutton").style.color = "black";
  var items = document.getElementsByClassName("navbarItemText");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "black";
  }
  items = document.getElementsByClassName("contactLinks");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "black";
  }
}

function setDarkMode(){
  document.getElementById("colorbutton").innerHTML = "<i class=\"fa fa-sun-o fa-3x\"></i>";
  document.getElementById("colorbutton").style.color = "#DCD7C9";
  document.body.style.backgroundColor = "#2C3639";
  document.body.style.color = "#DCD7C9";
  document.getElementById("navbar").style.backgroundColor = "rgb(63, 78, 79)";
  document.getElementById("navbar").style.boxShadow = "0px 5px rgb(33, 58, 59,0.9)";
  document.getElementById("navbutton").style.color = "#DCD7C9";
  document.getElementById("navbutton").style.color = "#DCD7C9";
  var items = document.getElementsByClassName("navbarItemText");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "#DCD7C9";
  }
  items = document.getElementsByClassName("contactLinks");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "#DCD7C9";
  }
}

function switchColor(){
  if(localStorage.getItem("colorMode") == "light"){
    setDarkMode();
    localStorage.setItem("colorMode","dark");
  } else{
    setLightMode();
    localStorage.setItem("colorMode","light");
  }
}
