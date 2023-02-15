import makeshiftDB, { createTodo } from '../../makeshift_db/memory_db';

export default function handler (req, res) {  
  if (makeshiftDB.todos.some(todo => todo.name === req.body.name)) {
    return res.status(400).json({
      message: "this restaurant already exists on the list"
    })
  }

  makeshiftDB.todos.unshift(createTodo(req.body.name));

  res.status(200).json({
    message: "success",
  })
}