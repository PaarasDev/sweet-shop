import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface SweetCardProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function SweetCard({ id, name, price, quantity }: SweetCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        backgroundColor: "#FFF0F5",
        transition: "0.2s",
        "&:hover": { transform: "scale(1.03)" }
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.primary">{name}</Typography>
        <Typography color="text.secondary">Price: ₹{price}</Typography>
        <Typography color={quantity > 0 ? "green" : "red"}>
          {quantity > 0 ? `In stock: ${quantity}` : "Out of stock"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          color="primary"
          disabled={quantity === 0}
          component={Link}
          to={`/sweet/${id}`}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
