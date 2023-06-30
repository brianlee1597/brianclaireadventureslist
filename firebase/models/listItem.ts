export default interface ListItem {
  id: string;
  input: string;
  important: boolean;
  location: string;
  status: 0 | 1;
  timestamp: number;
}
