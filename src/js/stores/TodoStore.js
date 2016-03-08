import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Water Bill",
                complete: false
            },
        ];
    }
    
    createTodo(text) {
        const id = Date.now();
        
        this.todos.push({
            id,
            text,
            complete: false,
        });
        
        this.emit("change");
    }
    
    getAll() {
        return this.todos;
    }
    
    handleAction(action) {
        console.log("TodoStore received an action", action);
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;