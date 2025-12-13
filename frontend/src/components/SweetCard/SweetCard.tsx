import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Sweet {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function SweetCard({ sweet }: { sweet: Sweet }) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        backgroundColor: "#FFF0F5",
        transition: "0.2s",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <CardContent>
        <Typography variant="h6">{sweet.name}</Typography>
        <Typography>Price: ₹{sweet.price}</Typography>
        <Typography color={sweet.quantity > 0 ? "green" : "red"}>
          {sweet.quantity > 0
            ? `In stock: ${sweet.quantity}`
            : "Out of stock"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          disabled={sweet.quantity === 0}
          component={Link}
          to={`/sweet/${sweet._id}`}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
