import useSWR, { mutate } from "swr";
import { useRef } from "react";
import axios from "axios";

const getTodos = "api/get_todos";
const fetcher = (string) => fetch(string).then(r => r.json());

export default function Home() {
  const { data, error } = useSWR(getTodos, fetcher);

  const todoRef = useRef();

  const addTodo = async () => {
    if (!todoRef.current) return;

    if (todoRef.current.value.length === 0) {
      alert("can't add nothing");
      return;
    }

    try {
      await axios.post("/api/add_todo", {
        name: todoRef.current.value,
      });
    } catch (e) {
      alert("please check if the restaurant is a duplicate");
    }

    mutate(getTodos);
  }

  const deleteTodo = async (name) => {
    try {
      await axios.post("/api/delete_todo", {
        name,
      });
    } catch (e) {
      alert("please try again");
    }

    mutate(getTodos);
  }

  if (error || !data) return <></>;

  return (
    <>
      <input type="text" ref={todoRef}/>
      <button onClick={addTodo}>add</button>
      <div>
        {data.todos.map(a => (
          <div>
            <h1>{a.name}</h1>
            <button onClick={() => deleteTodo(a.name)}>delete</button>
          </div>
        ))}
      </div>
    </>
  )
}
