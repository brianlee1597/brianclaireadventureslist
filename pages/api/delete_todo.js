import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'todos.json')

const adapter = new JSONFile(file);
const db = new Low(adapter);

async function handler(req, res) {
  
  try {
    await db.read();

    db.data ||= { todos: [] }

    const index = db.data.todos.indexOf(JSON.stringify({ name: req.body.name }));

    if (index > -1) { 
      db.data.todos.splice(index, 1);
    }

    await db.write();

    res.status(200).json({
      message: "success",
    })
  } catch {
    res.status(400).json({
      message: "error fetching todo, try again"
    })
  }
}

export default handler;