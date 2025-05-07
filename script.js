// Bind event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Bind buttons to their functions
    document.getElementById("changeTextBtn").addEventListener("click", changeText);
    document.getElementById("changeStyleBtn").addEventListener("click", toggleBoxColor);
    document.getElementById("addElementBtn").addEventListener("click", addListItem);
    document.getElementById("removeElementBtn").addEventListener("click", removeListItem);
  });
  
  // Function to change the text content of the paragraph dynamically
  function changeText() {
    const textPara = document.getElementById("textContent");
    textPara.textContent = "The text has changed, showcasing dynamic content update!";
  }
  
  // Function to toggle the CSS style of the color box
  function toggleBoxColor() {
    const box = document.getElementById("colorBox");
    // Toggle between blue and green colors for visibility
    box.style.backgroundColor = (box.style.backgroundColor === "blue" || box.style.backgroundColor === "") 
      ? "green" 
      : "blue";
  }
  
  // Function to add a new list item to the unordered list
  function addListItem() {
    const ul = document.getElementById("dynamicList");
    const newItem = document.createElement("li");
    // Count current items to assign sequential numbering
    const currentCount = ul.getElementsByTagName("li").length + 1;
    newItem.textContent = "List Item " + currentCount;
    newItem.classList.add("highlight");  // add visual cue via CSS class
    ul.appendChild(newItem);
  }
  
  // Function to remove the last list item from the unordered list
  function removeListItem() {
    const ul = document.getElementById("dynamicList");
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    } else {
      alert("There are no more list items to remove!");
    }
  }