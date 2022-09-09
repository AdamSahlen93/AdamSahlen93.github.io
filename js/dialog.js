
const showDialogButton1 = document.getElementById('java-card');
const hideDialog1 = document.getElementById("cancel-java")
const javaDialog = document.getElementById('java-dialog');


// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof javaDialog.showModal !== 'function') {
  javaDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
showDialogButton1.addEventListener('click', () => {
  if (typeof javaDialog.showModal === "function") {
    javaDialog.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Update details" button opens the <dialog> modally
hideDialog1.addEventListener('click', () => {
  if (typeof javaDialog.showModal === "function") {
    javaDialog.hidden = true;
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});



const updateButton2 = document.getElementById('teacher-card');
const favDialog2 = document.getElementById('teacher-dialog');

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



const updateButton3 = document.getElementById('biomedicin-card');
const favDialog3 = document.getElementById('biomedicin-dialog');

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





