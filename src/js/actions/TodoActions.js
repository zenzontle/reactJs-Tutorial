import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [{
                id: 848484848,
                text: "Go Shopping Again",
                complete: false
            },
            {
                id: 626262626,
                text: "Hug Wife",
                complete: true
            }]
        })
    }, 1000);
}