import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'todo_details.json')

const adapter = new JSONFile(file);
const db = new Low(adapter);

async function handler(req, res) {
    const name = req.body.name;

  try {
    await db.read();

    db.data ||= {}
    db.data[name]

    res.status(200).json({
      message: "success",
      details: db.data[name] || null,
    })
  } catch {
    res.status(400).json({
      message: "error fetching todo_details, try again"
    })
  }
}

export default handler;