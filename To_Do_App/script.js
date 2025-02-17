const todoValue = document.getElementById("todoText");
const todoAlert = document.getElementById("Alert");
const listItems = document.getElementById("list-items");
const addUpdate = document.getElementById("AddTaskToList");


let todo = JSON.parse(localStorage.getItem("todo-list"));
if (!todo) {
  todo = [];
}

function setLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(todo));
  }


  function CreateToDoItems() {
    if (todoValue.value === "") {
        todoAlert.innerText = "Please enter your todo text!";
        todoValue.focus();
    } else {
        let IsPresent = false;
        todo.forEach((element) => {
            if (element.item === todoValue.value) {
                IsPresent = true;
            }
        });

        if (IsPresent) {
            setAlertMessage("This item is already present in the list!");
            return;
        }

        let li = document.createElement("li");
        const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div>
                            <button class="edit todo-controls" onclick="UpdateToDoItems(this)">Edit</button>
                            <button class="delete todo-controls" onclick="DeleteToDoItems(this)">Delete</button></div></div>`;
        li.innerHTML = todoItems;
        listItems.appendChild(li);

        let itemList = { item: todoValue.value, status: false };
        todo.push(itemList);
        setLocalStorage();
    }

    todoValue.value = "";
    setAlertMessage("The item has been added to your list");
}



function ReadToDoItems() {
    todo.forEach((element, index) => {
      let li = document.createElement("li");
      let style = "";
      if (element.status) {
        style = "style='text-decoration: line-through'";
      }

      const todoItems = `
        <div ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">
          ${element.item}
        </div>
        <div>
          ${style === "" ? '<button class="edit todo-controls" onclick="UpdateToDoItems(this)">Edit</button>' : ''}
          <button class="delete todo-controls" onclick="DeleteToDoItems(this)">Delete</button>
        </div>
      `;
      li.innerHTML = todoItems;
      listItems.appendChild(li);
    });
}
ReadToDoItems();



  let editingIndex = null; // Track the index of the item being edited


  function UpdateToDoItems(e) {
    console.log('Edit button clicked');

    let itemDiv = e.parentElement.parentElement.querySelector("div");

    // If the item is not completed, allow editing
    if (itemDiv.style.textDecoration !== "line-through") {
        todoValue.value = itemDiv.innerText.trim(); // Fill the input with item text
        editingIndex = Array.from(e.closest('ul').children).indexOf(e.closest('li')); // Get the index of the item
        addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()"); // Change button to update mode
        addUpdate.innerText = "Update"; // Change button text to "Update"
        todoValue.focus(); // Focus input field for edit
    }
}



  
  
function UpdateOnSelectionItems() {
    // If there's no item being edited, do nothing
    if (editingIndex === null) return;

    // Prevent adding duplicates
    let IsPresent = todo.some(element => element.item === todoValue.value);
    if (IsPresent) {
        setAlertMessage("This item is already present in the list!");
        return;
    }

    // Update the item at the editingIndex in the todo array
    todo[editingIndex].item = todoValue.value;

    // Update the display and reflect the change in the UI
    setLocalStorage(); // Save changes to localStorage
    const updatedItemDiv = listItems.children[editingIndex].querySelector('div');
    updatedItemDiv.innerText = todoValue.value; // Update the displayed text

    // Reset the button back to "Add" mode
    addUpdate.setAttribute("onclick", "CreateToDoItems()");
    addUpdate.innerText = "+";
    todoValue.value = ""; // Clear the input field

    editingIndex = null; // Clear the editing reference
    setAlertMessage("Todo item updated successfully!");
}






  function DeleteToDoItems(e) {
    let itemText = e.parentElement.parentElement.querySelector("div").innerText.trim();
    
    todo = todo.filter(item => item.item !== itemText);
    e.parentElement.parentElement.remove();
    
    setLocalStorage();
}


function CompletedToDoItems(e) {
    let itemDiv = e.parentElement.querySelector("div");
    let editButton = e.parentElement.querySelector(".edit");

    if (itemDiv.style.textDecoration.includes("line-through")) {
        itemDiv.style.textDecoration = "";
        itemDiv.style.textDecorationThickness = "";
        if (editButton) editButton.style.display = "inline-block";
    } else {
        itemDiv.style.textDecoration = "line-through";
        itemDiv.style.textDecorationThickness = "2px";
        if (editButton) editButton.style.display = "none";
    }

    todo.forEach(element => {
        if (itemDiv.innerText.trim() === element.item) {
            element.status = !element.status;
        }
    });

    setLocalStorage();
}

function setAlertMessage(message) {
    todoAlert.removeAttribute("class");
    todoAlert.innerText = message;

    setTimeout(() => {
        todoAlert.innerText = ""; 
    }, 5000);
  }