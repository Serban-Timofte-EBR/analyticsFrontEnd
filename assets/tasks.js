const taskList = document.getElementById("taskList");

function addTask() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const deadline = document.getElementById("deadline").value;
    const category = document.getElementById("category").value;
    const state = document.getElementById("state").value;
    const newRow = taskList.insertRow();
    newRow.insertCell().innerHTML = state;
    newRow.insertCell().innerHTML = name;
    newRow.insertCell().innerHTML = message;
    newRow.insertCell().innerHTML = deadline;
    newRow.insertCell().innerHTML = category;
}

function filterTasks() {
    const filterCategory = document.getElementById("filterCategory").value;
    let rows = taskList.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        let categoryCell = rows[i].getElementsByTagName("td")[4];
        if (filterCategory === "All") {
            rows[i].style.display = "";
        } else if (categoryCell.innerHTML !== filterCategory) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}
