import fs from "fs";
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'todos.json')

export default function handler (req, res) {
  let json = fs.readFileSync(file);
  json = JSON.parse(json);

  res.status(200).json({
    message: "success",
    todos: json.todos,
  })
}