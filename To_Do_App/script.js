window.onload = function () {
  const todoValue = document.getElementById("todoText");
  const todoAlert = document.getElementById("Alert");
  const listItems = document.getElementById("list-items");
  const completedItems = document.getElementById("completed-items");
  const addUpdate = document.getElementById("AddTaskToList");

  let todo = JSON.parse(localStorage.getItem("todo-list")) || [];
  let editingIndex = null;

  function setLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(todo));
  }

  function setAlertMessage(message) {
    todoAlert.innerText = message;
    setTimeout(() => {
      todoAlert.innerText = "";
    }, 5000);
  }

  window.IncrementCount = function (btn) {
  const taskDiv = btn.closest("div");
  const textEl = taskDiv.querySelector(".task-text");
  const fullText = textEl.innerText.trim();
  const itemText = fullText.replace(/\s\d+x$/, "");

  const index = todo.findIndex(el => el.item === itemText);

  if (index !== -1) {
    todo[index].count = (todo[index].count || 1) + 1;
    setLocalStorage();
    ReadToDoItems();
  }
};


  function ReadToDoItems() {
    listItems.innerHTML = "";
    completedItems.innerHTML = "";

    todo.forEach((element) => {
      let li = document.createElement("li");
      const taskHTML = `
        <div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">
            <button class="increment-btn" onclick="IncrementCount(this)">+</button>
            <span class="task-text">${element.item} ${element.count || 1}x</span>
        </div>
        <div>
            ${!element.status ? '<button class="edit todo-controls" onclick="UpdateToDoItems(this)">Edit</button>' : ''}
            <button class="delete todo-controls" onclick="DeleteToDoItems(this)">Delete</button>
        </div>
        `;

      li.innerHTML = taskHTML;

      if (element.status) {
        li.querySelector("div").style.textDecoration = "line-through";
        li.querySelector("div").style.textDecorationThickness = "1px";
        completedItems.appendChild(li);
      } else {
        listItems.appendChild(li);
      }
    });
  }

  window.CreateToDoItems = function () {
    const newItem = todoValue.value.trim();

    if (newItem === "") {
      todoAlert.innerText = "Please enter your todo text!";
      todoValue.focus();
      return;
    }

    const isPresent = todo.some((element) => element.item === newItem);
    if (isPresent) {
      setAlertMessage("This item is already present in the list!");
      return;
    }

    todo.push({ item: newItem, status: false, count: 1 });
    setLocalStorage();
    ReadToDoItems();

    todoValue.value = "";
    setAlertMessage("The item has been added to your list");
  }

  window.UpdateToDoItems = function (e) {
    const itemDiv = e.parentElement.parentElement.querySelector("div");
    const itemText = itemDiv.querySelector(".task-text").innerText.trim().replace(/\s\d+x$/, "");
    const index = todo.findIndex((el) => el.item === itemText);

    if (index !== -1 && !todo[index].status) {
      todoValue.value = todo[index].item;
      editingIndex = index;
      addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
      addUpdate.innerText = "/";
      todoValue.focus();
    }
  };

  window.UpdateOnSelectionItems = function () {
    if (editingIndex === null) return;

    const newItem = todoValue.value.trim();

    if (todo[editingIndex].status) {
      setAlertMessage("Cannot edit a completed task.");
      return;
    }

    const isDuplicate = todo.some(
      (el, idx) => el.item === newItem && idx !== editingIndex
    );
    if (isDuplicate) {
      setAlertMessage("This item is already present in the list!");
      return;
    }

    todo[editingIndex].item = newItem;
    setLocalStorage();
    ReadToDoItems();

    addUpdate.setAttribute("onclick", "CreateToDoItems()");
    addUpdate.innerText = "+";
    todoValue.value = "";
    editingIndex = null;
    setAlertMessage("Todo item updated successfully!");
  };

  window.DeleteToDoItems = function (e) {
    const itemText = e.parentElement.parentElement.querySelector(".task-text").innerText.trim().replace(/\s\d+x$/, "");
    const index = todo.findIndex((item) => item.item === itemText);
    if (index !== -1) {
      todo.splice(index, 1);
      setLocalStorage();
      ReadToDoItems();
    }
  };

  window.CompletedToDoItems = function (e) {
    const itemDiv = e.parentElement.querySelector("div");
    const itemText = itemDiv.querySelector(".task-text").innerText.trim().replace(/\s\d+x$/, "");


    const index = todo.findIndex((item) => item.item === itemText);
    if (index !== -1) {
      todo[index].status = !todo[index].status;
      setLocalStorage();
      ReadToDoItems();
    }
  };

  ReadToDoItems();
};
