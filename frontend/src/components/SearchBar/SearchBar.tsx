import { TextField, Paper } from "@mui/material";

interface SearchBarProps {
  search: string;
  setSearch: (val: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <TextField
        fullWidth
        label="Search sweets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Paper>
  );
}
