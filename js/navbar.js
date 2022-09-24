function openNav() {
    document.getElementById("myNav").style.height = "14rem";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  function navigated() {
    document.getElementById("myNav").style.height = "0%";
    activeNav = false
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
  