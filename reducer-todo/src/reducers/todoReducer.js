export const initialState = {
    todos: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        },
        {
        item: 'Learn about dispatch',
        completed: false,
        id: 3892987601
        },
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        const newTodo = {
            item: action.payload,
            completed: false,
            id: Date.now(), 
        }
        return {
            ...state,
            todos: [...state.todos, newTodo]};

        case 'TOGGLE_TODO':
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            })
        }   
        
        case 'DELETE_TODO':
        return {
            ...state,
            todos: state.todos.filter(todo => {
                return todo.id !== !action.payload
            })
        };


        default:
            return state;
        }
};