
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





