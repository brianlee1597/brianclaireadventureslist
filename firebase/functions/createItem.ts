import ListItem from "../models/listItem";

export default function createItem(input: string): ListItem {
  return {
    input,
    important: false,
    location: "",
    status: 0,
    timestamp: Date.now(),
  };
}
