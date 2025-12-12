import { useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import SweetCard from "../../components/SweetCard/SweetCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const dummySweets = [
  { id: 1, name: "Chocolate Bar", price: 50, quantity: 10 },
  { id: 2, name: "Strawberry Candy", price: 20, quantity: 33 },
  { id: 3, name: "Lollipop", price: 15, quantity: 25 },
  { id: 4, name: "Milk Cookies", price: 80, quantity: 5 },
  { id: 5, name: "Gummy Bears", price: 30, quantity: 50 },
  { id: 6, name: "Caramel Fudge", price: 60, quantity: 0 },
  { id: 7, name: "Tiramisu", price: 70, quantity: 15 },
  { id: 8, name: "Fruit Chews", price: 25, quantity: 40 },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filtered = dummySweets.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ paddingTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        🍭 Available Sweets
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      {/* Flexbox layout instead of Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "flex-start",
        }}
      >
        {filtered.map((sweet) => (
          <Box key={sweet.id} sx={{ width: { xs: "100%", sm: "45%", md: "22%" } }}>
            <SweetCard {...sweet} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
