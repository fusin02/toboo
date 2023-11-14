const input = document.getElementById("input-bar");
const tasks = document.getElementById("tasks");
function addTask() {
    if (input.value === '') {
        alert("You can't do nothing!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        savedata();
    }
    input.value = '';
}

tasks.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        savedata();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", tasks.innerHTML);
}

function showdata() {
    tasks.innerHTML = localStorage.getItem("data");
}

showdata();