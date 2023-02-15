export const createTodo = (name, url) => {
    return {
        name,
        url: url || null,
    }
}

const makeshiftDB = {
    todos: []
};

export default makeshiftDB