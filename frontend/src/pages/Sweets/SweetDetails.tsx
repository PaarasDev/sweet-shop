import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Chip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const dummySweets = [
  {
    id: 1,
    name: "Chocolate Bar",
    category: "Chocolate",
    price: 50,
    quantity: 10,
    image: "/assets/sweets/chocolate-bar.jpg",
    description: "Rich creamy chocolate made from premium cocoa beans.",
  },
  {
    id: 2,
    name: "Strawberry Candy",
    category: "Candy",
    price: 20,
    quantity: 33,
    image: "/assets/sweets/strawberry-candy.jpg",
    description: "Sweet and tangy strawberry-flavored candy.",
  },
  {
    id: 3,
    name: "Lollipop",
    category: "Candy",
    price: 15,
    quantity: 25,
    image: "/assets/sweets/lollipop.jpg",
    description: "Classic colorful lollipop loved by kids and adults.",
  },
  {
    id: 4,
    name: "Milk Cookies",
    category: "Cookies",
    price: 80,
    quantity: 5,
    image: "/assets/sweets/milk-cookies.jpg",
    description: "Crunchy milk cookies baked to perfection.",
  },
  {
    id: 5,
    name: "Gummy Bears",
    category: "Gummies",
    price: 30,
    quantity: 50,
    image: "/assets/sweets/gummy-bears.jpg",
    description: "Chewy gummy bears in assorted fruit flavors.",
  },
  {
    id: 6,
    name: "Caramel Fudge",
    category: "Fudge",
    price: 60,
    quantity: 0,
    image: "/assets/sweets/caramel-fudge.jpg",
    description: "Soft caramel fudge that melts in your mouth.",
  },
  {
    id: 7,
    name: "Tiramisu",
    category: "Dessert",
    price: 70,
    quantity: 15,
    image: "/assets/sweets/tiramisu.jpg",
    description: "Classic Italian dessert with coffee and cocoa flavors.",
  },
  {
    id: 8,
    name: "Fruit Chews",
    category: "Candy",
    price: 25,
    quantity: 40,
    image: "/assets/sweets/fruit-chews.jpg",
    description: "Soft fruit chews bursting with fruity goodness.",
  },
];


export default function SweetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sweet = dummySweets.find((s) => s.id === Number(id));

  const [selectedQty, setSelectedQty] = useState(1);

  if (!sweet) {
    return (
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h5">Sweet not found</Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate("/dashboard")}>
          Back
        </Button>
      </Container>
    );
  }

  const increaseQty = () => {
    if (selectedQty < sweet.quantity) {
      setSelectedQty((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (selectedQty > 1) {
      setSelectedQty((prev) => prev - 1);
    }
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Image */}
         <Box
  sx={{
    width: { xs: "100%", md: "40%" },
    height: 260,
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: "#FFF0F5",
  }}
>
  <img
    src={sweet.image}
    alt={sweet.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</Box>


          {/* Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              {sweet.name}
            </Typography>

            <Chip label={sweet.category} color="secondary" sx={{ mb: 2 }} />

            <Typography variant="h6">Price: ₹{sweet.price}</Typography>

            <Typography
              sx={{
                color: sweet.quantity > 0 ? "green" : "red",
                mb: 2,
              }}
            >
              {sweet.quantity > 0
                ? `In stock: ${sweet.quantity}`
                : "Out of stock"}
            </Typography>

            <Typography sx={{ mb: 3 }}>{sweet.description}</Typography>

            {/* Quantity Selector */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                gap: 1,
              }}
            >
              <IconButton
                onClick={decreaseQty}
                disabled={sweet.quantity === 0}
              >
                <RemoveIcon />
              </IconButton>

              <Typography sx={{ minWidth: 30, textAlign: "center" }}>
                {selectedQty}
              </Typography>

              <IconButton
                onClick={increaseQty}
                disabled={sweet.quantity === 0}
              >
                <AddIcon />
              </IconButton>
            </Box>

            {/* Actions */}
            <Button
              variant="contained"
              color="primary"
              disabled={sweet.quantity === 0}
              sx={{ mr: 2 }}
            >
              Purchase
            </Button>

            <Button variant="outlined" onClick={() => navigate("/dashboard")}>
              Back
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
