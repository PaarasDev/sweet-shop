import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

import { getAllSweetsApi } from "../../api/sweet.api";
import { purchaseSweetApi } from "../../api/purchase.api";

export default function SweetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sweet, setSweet] = useState<any>(null);
  const [selectedQty, setSelectedQty] = useState(1);

  useEffect(() => {
    getAllSweetsApi()
      .then((data) => {
        const found = data.find((s: any) => s._id === id);
        setSweet(found);
      })
      .catch(() => alert("Failed to load sweet"));
  }, [id]);

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

  const handlePurchase = async () => {
    try {
      await purchaseSweetApi(sweet._id, selectedQty);

      alert("Purchase successful!");

      setSweet({
        ...sweet,
        quantity: sweet.quantity - selectedQty,
      });

      setSelectedQty(1);
    } catch (err: any) {
      alert(err.message);
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
              onClick={handlePurchase}
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
