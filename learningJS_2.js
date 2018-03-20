//version 3 of the todos app

var todoList = {
    items: [],
    addToDos: function(item){
        this.items.push(
            {
                todotext: item,
                completed: false
            }
            
        );
    },
    displayToDos: function(item){
        console.log(this.items);
    },
    deleteToDos: function(position){
        this.items.splice(position, 1);
    },
    changeToDos: function(position, new_todo, status){
        this.items[position].todotext = new_todo
        this.items[position].completed = status
    }
};

//version 4 of the todos app