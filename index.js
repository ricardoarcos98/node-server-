const readline = require('readline'); // import readline module

// Arreglo para almacenar los datos de la tarea 
const taskList = [];

// Crear la interfaz de lectura y escritura
// This code creates an interface for reading and writing using the readline module
// It takes input from the standard input and outputs to the standard output
const rl = readline.createInterface({
  input: process.stdin, //  read user input
  output: process.stdout // read user output 
});
// Function to add a task
function addTask() {
rl.question("Task indicator: ",(indicator)=>{
    rl.question("Description of the task: ",(description)=>{
    // validar que ni el indicador ni la descripción estén vacíos
    if(indicator.trim() === "" || description.trim() === ""){
        console.log("Indicator and description can't be empty");
    }else{
        const task = {
        indicator,
        description, 
        completed:false
        };
        taskList.push(task);
        console.log("Task added successfully");
    }; 
    showMenu();
});
});
}
// Function to delete a task 
function deleteTask(){
    rl.question("Número de tarea a eliminar: ",(taskNumber)=>{
        const index = (taskNumber)-1; 
        if (index >=0 && index < taskList.length){
            taskList.splice(index,1);
            console.log("Task deleted successfully");
        }else{
            console.log("Task not found");
        }
        showMenu();
    });
}
// Function to mark a task as completed
function completeTask(){
    rl.question("Número de tarea a completar: ",(taskNumber)=>{
    const index=parseInt(taskNumber)-1;
    if(index>=0 && index < taskList.length){
    taskList[index].completed=true;
    console.log("Task completed successfully");
    }else{
    console.log("Task not found");
    }
    showMenu();
    });
}
// Function to show the todo list
function showTaskList(){
    console.log("Task list: ");
    taskList.forEach((task, index)=>{
        const status= task.completed ? "Completed":"Pending";
        console.log(`${index+1}. [${status}] ${task.indicator}:${task.description} `);
    });
    showMenu();
}

// function to show the main menu
function showMenu(){
    console.log("Options: ");
    console.log("1.- Add a task");
    console.log("2.- show task List");
    console.log("3.- mark task as completed");
    console.log("4.- Deleted task");
    console.log("5.- Exit");
    rl.question('Input the option: ',(option)=>{
        switch(option){
            case "1":
                addTask();
                break;
            case "2":
                showTaskList();
                break;
            case "3":
                completeTask();
                break;
            case "4":
                deleteTask();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid option \n");
                showMenu();
                break;
        }
    })
}
console.log("Welcome to your todo list");
// start the program showing the main menu
showMenu();