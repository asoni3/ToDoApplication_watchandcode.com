// FIRST VERSION OF APP - ToDos

//Learning JavaScript from watchandcode.com
// how to write array in javascript
var todos = ['item 1', 'item 2', 'item 3'];

//how to print in javascript

console.log('My todos:',todos);

todos.push('item 4');
console.log('Updated todo list: ', todos);
todos.push('item 5');
console.log('Updated latest todo list', todos);

//how to access arrays in javascript - 0 indexed 
console.log(todos[0])


//update an item in array
todos[0] = 'item 6 replaced item 1'
console.log('todo after a replaced item', todos)

//delete an item in array
todos.splice(0,1)
//first parameter in splice is the position and the second parameter is number of items from that position you want to delete
console.log('first item got deleted! oops :P', todos)



//SECOND VERSION OF APP - ToDos 

//declare a function in JavaScript
function sayHiTo(name)
{
    console.log('Hey,',name);
}

function displayToDos()
{
    console.log(todos);
}
function addToDo(todo)
{
    todos.push(todo);
    displayToDos();
}
//how to call a function in JavaScript
sayHiTo('Abhay')

//function to change an item in todos 
function changeToDo(position, new_todo)
{
    todos[position] = new_todo;
    displayToDos();
}

function deleteToDo(position)
{
    todos.splice(position, 1);
    displayToDos()
}

//how to create an object in JavaScript
var newObject = {
    property1: 'text',
    property2: 1001
};

console.log('This is how you can access property 1 of the object: ', newObject.property1)

var person = {
    name: 'Abhay',
    sayName: function ()
    {
        console.log(this.name)  //IMPORTANT - How to refer object you are in
    }
};