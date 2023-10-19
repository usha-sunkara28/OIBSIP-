document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <span class="delete"><button class="btn btn-danger">Cancel</button></span>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".delete").addEventListener("click", function () {
                li.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
