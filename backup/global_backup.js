clickAndSelect()

function clickAndSelect() {
  let cards = Array.from( document.querySelectorAll('.card') ),
      elements = []
  
  // Add child nodes to clickable elements
  cards.forEach(card => {
    elements = elements.concat( Array.from(card.children) )
  })

  // Attach to mouse events
  elements.forEach(element => {
    
    // click: Disable
    element.addEventListener('click', e => e.preventDefault())
    
    // mousedown: Log the timestamp
    element.addEventListener('mousedown', e => {
      let card = e.target.closest(".card")
      card.setAttribute('data-md', Date.now())
    })
    
    // mouseup: Determine whether to click
    element.addEventListener('mouseup', e => {
      
      // Only one please
      e.stopPropagation();

      let card = (e.target.classList.contains("card")) ? e.target : e.target.closest('.card'),
          then = card.getAttribute('data-md'),
          now = Date.now()

      // Allow 200ms to distinguish click from non-click
      if(now - then < 200) {
        
        // Visit the link in the card
        // Change 'a' to a class if you have multiple links
        window.location = card.querySelector('a').href
    
        // Remove for production
        card.classList.add('visited')
        console.log(card.querySelector('a').href)
        
      }
  
      // Clean up
      card.removeAttribute('data-md')
      
    })
  })
}

//ABOUT ME
const updateButton1 = document.getElementById('updateDetails1');
const favDialog1 = document.getElementById('favDialog1');


// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog1.showModal !== 'function') {
  favDialog1.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton1.addEventListener('click', () => {
  if (typeof favDialog1.showModal === "function") {
    favDialog1.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});



const updateButton2 = document.getElementById('updateDetails2');
const favDialog2 = document.getElementById('favDialog2');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog2.showModal !== 'function') {
  favDialog2.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton2.addEventListener('click', () => {
  if (typeof favDialog2.showModal === "function") {
    favDialog2.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});



const updateButton3 = document.getElementById('updateDetails3');
const favDialog3 = document.getElementById('favDialog3');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog3.showModal !== 'function') {
  favDialog3.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton3.addEventListener('click', () => {
  if (typeof favDialog3.showModal === "function") {
    favDialog3.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});

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



