let todoItemsContainer = document.getElementById("todoItemsContainer");
let addtodoButton = document.getElementById("addtodobutton");




let todoList = [{
        text: "Learn HTML",
        uniqueid: 1
    },
    {
        text: "Learn CSS",
        uniqueid: 12
    },
    {
        text: "Learn JavaScript",
        uniqueid: 3
    }
];



addtodoButton.onclick = function() {
    onaddtodo();
}

function ontodoststuschange(checkboxid, labelId) {
    let checkboxelement = document.getElementById(checkboxid);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked")

}

function ondeletetodo(todoid) {
    let todoElement1 = document.getElementById(todoid)
    todoItemsContainer.removeChild(todoElement1)
}

function createAndAppendTodo(todo) {
    let checkboxid = "checkbox" + todo.uniqueid;
    let labelId = "labe" + todo.uniqueid;
    let todoid = "todo" + todo.uniqueid;


    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    todoElement.id = todoid

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxid;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        ontodoststuschange(checkboxid, labelId)
    }
    todoElement.appendChild(inputElement);



    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxid);
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        ondeletetodo(todoid)
    }
    deleteIconContainer.appendChild(deleteIcon);


}

function onaddtodo() {
    let todocount = todoList.length;
    todocount = todocount + 1;



    let userinputelement = document.getElementById("todoUserInput");
    let userinputvalue = userinputelement.value;
    if (userinputvalue === "") {
        alert("valid input")
        return;
    }
    let newtodo = {
        text: userinputvalue,
        uniunumber: todocount
    };
    createAndAppendTodo(newtodo);
    userinputelement.value = ""

}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}