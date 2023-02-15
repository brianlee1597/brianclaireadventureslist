import makeshiftDB from '../../makeshift_db/memory_db';

export default function handler (req, res) {
  res.status(200).json({
    message: "success",
    todos: makeshiftDB.todos,
  })
}