import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'todos.json')

export default function handler (req, res) {
  let json = fs.readFileSync(file);
  json = JSON.parse(json);
  
  if (json.todos.some(rest => rest.name === req.body.name)) {
    console.log("test");
    return res.status(400).json({
      message: "this restaurant already exists on the list"
    })
  }

  json.todos.unshift({ name: req.body.name });

  fs.writeFileSync(file, JSON.stringify(json));

  res.status(200).json({
    message: "success",
  })
}

// const adapter = new JSONFile(file);
// const db = new Low(adapter);

// async function handler(req, res) {
  
//   try {
//     await db.read();

//     db.data ||= { todos: [] }

//     const data = JSON.stringify({ name: req.body.name });
//     if (!db.data.todos.includes(data))
//       db.data.todos.unshift(data);
    
//     else {
      // return res.status(400).json({
      //   message: "this restaurant already exists on the list"
      // })
//     }

//     await db.write();

//     res.status(200).json({
//       message: "success",
//     })
//   } catch {
//     res.status(400).json({
//       message: "error adding todo, try again"
//     })
//   }
// }

// export default handler;