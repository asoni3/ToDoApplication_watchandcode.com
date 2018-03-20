//version 3 of the todos app

var todoList = {
    items: [],
    addToDos: function(item){
        this.items.push(item)
    },
    displayToDos: function(item){
        console.log(this.items);
    },
    deleteToDos: function(position){
        this.items.splice(position, 1);
    },
    changeToDos: function(position, new_todo){
        this.items[position] = new_todo
    }
};