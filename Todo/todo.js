const tasksElement = document.querySelector("#tasks")
const inputTaskElement = document.querySelector("#input-task")

function render() {
    const data = TodoStore.get()
    tasksElement.innerHTML = ""
    data.forEach(element => {
        tasksElement.innerHTML += `<li>${element}</li>`
    });
}

function addTask() {
    const task = inputTaskElement.value
    const data = TodoStore.get()
    data.push(task)
    TodoStore.set(data)
    render()
    inputTaskElement.value = ""
}

TodoStore = createStore("todo", [])

render()