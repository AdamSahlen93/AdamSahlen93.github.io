function openNav() {
    document.getElementById("myNav").style.height = "10rem";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  var activeNav = false;
  
  function hamburger() {
    if (activeNav) {
      closeNav()
      activeNav = false
    } else {
      openNav()
      activeNav = true
    }
  }
  