const chalk = require('chalk');

const readline = require('readline'); // import readline module

// Arreglo para almacenar los datos de la tarea 
const taskList = [];

// Crear la interfaz de lectura y escritura
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
        console.log(chalk.orange("Indicator and description can't be empty"));
    }else{
        const task = {
        indicator,
        description, 
        completed:false
        };
        taskList.push(task);
        console.log(chalk.green("Task added successfully"));
    }; 
    showMenu();
});
});
}
// Function to delete a task 
function deleteTask(){
    return new Promise((resolve, reject)=>{
        rl.question('Número de tarea a eliminar:', (taskNumber) => {
            const index = parseInt(taskNumber) -1;
            if(index >= 0 && index < taskList.length){
                const taskToDelete = taskList[index];
            rl.question(`¿Estás seguro de que deseas eliminar la tarea "${taskToDelete.indicator}: ${taskToDelete.description}"? (Si/No): `, (confirmation) => {
                if(confirmation.toLowerCase() === "si"){
                    taskList.splice(index, 1);
                    resolve("Tarea eliminada con éxito");
                }else {
                    reject("Eliminación cancelada")
                }
            });
            } else{
                reject("Tarea no encontrada");
            }
        })
    })
}
// Function to mark a task as completed
function completeTask(){
    return new Promise((resolve, reject)=>{
        rl.question('Número de tarea completada: ',(taskNumber)=>{
            const index = parseInt(taskNumber) -1; 
            if(index >= 0 && index < taskList.length) {
                taskList[index].completed=true;
                resolve('Tarea marcada como completada');
            }else{
                reject('¡Número de tarea inválido!')
            }
        })
    })
}
    
// Function to show the todo list
function showTaskList(){
    console.log("Task list: ");
    taskList.forEach((task, index)=>{
        const status= task.completed ? "Completed":"Pending";
        console.log(chalk.blue.bgRed.bold(`${index+1}. [${status}] ${task.indicator}:${task.description} `));
    });
    showMenu();
}

// Función getInput 
function getInput(question){
    return new Promise((resolve, reject)=>{
        rl.question(question,(input)=>{
            resolve(input);
        })
    })
}
// function to show the main menu
async function showMenu(){
    console.log(chalk.yellow("Options: "));
    console.log(chalk.yellow("1.- Add a task"));
    console.log(chalk.yellow("2.- show task List"));
    console.log(chalk.yellow("3.- mark task as completed"));
    console.log(chalk.yellow("4.- Deleted task"));
    console.log(chalk.yellow("5.- Exit"));
    const option = await getInput("Select an option: ");
        switch(option){
            case "1":
                try {
                    const message = await addTask();
                    console.log(message)
                } catch (error){
                    console.log(error);
                }
            case "2":
                showTaskList();
                break;
            case "3":
                completeTask()
                .then((message)=>{
                    console.log(message);
                    showMenu();
                });
                break;
            case "4":
                deleteTask()
                .then((message)=>{
                    console.log(message);
                showMenu();
                })
                .catch((error)=>{
                    console.log(error);
                    showMenu();
                })
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid option \n");
                await showMenu();
                break;
        }
}
console.log("Welcome to your todo list");
// start the program showing the main menu
showMenu();