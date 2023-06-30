export default interface ListItem {
  input: string;
  important: boolean;
  location: string;
  status: 0 | 1;
  timestamp: number;
}
