import { useEffect, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import SweetCard from "../../components/SweetCard/SweetCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getAllSweetsApi } from "../../api/sweet.api";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [sweets, setSweets] = useState<any[]>([]);

  useEffect(() => {
    getAllSweetsApi()
      .then(setSweets)
      .catch((err) => alert(err.message));
  }, []);

  const filtered = sweets.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ paddingTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        🍭 Available Sweets
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {filtered.map((sweet) => (
          <Box key={sweet._id} sx={{ width: { xs: "100%", sm: "45%", md: "22%" } }}>
            <SweetCard sweet={sweet} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
