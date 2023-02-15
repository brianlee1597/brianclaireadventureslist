import makeshiftDB from "../../makeshift_db/memory_db";

export default function handler (req, res) {
  for (let i = 0; i < makeshiftDB.todos.length; i++) {
    if (makeshiftDB.todos[i].name !== req.body.name) continue;
    makeshiftDB.todos.splice(i, 1);

    return res.status(200).json({
        message: "success",
    })
  }

  res.status(400).json({
    message: "that todo doesn't exist",
  })
}