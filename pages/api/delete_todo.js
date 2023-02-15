import fs from "fs";
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'todos.json')

export default function handler (req, res) {
  let json = fs.readFileSync(file);
  json = JSON.parse(json);

  for (let i = 0; i < json.todos.length; i++) {
    if (json.todos[i].name !== req.body.name) continue;
    json.todos.splice(i, 1);

    fs.writeFileSync(file, JSON.stringify(json));

    return res.status(200).json({
        message: "success",
    })
  }

  res.status(400).json({
    message: "that todo doesn't exist",
  })
}