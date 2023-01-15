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
