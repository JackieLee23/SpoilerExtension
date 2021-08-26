// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");


chrome.storage.sync.get("color", ({
  color
}) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let newString = document.getElementById("test1").value;
  chrome.storage.sync.set({spoilerText: newString});
  console.log(spoilerText);
});


// The body of this function will be executed as a content script inside the
// current page
