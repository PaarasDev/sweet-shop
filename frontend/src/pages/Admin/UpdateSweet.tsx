import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import {
  addSweetApi,
  updateSweetApi,
  getAllSweetsApi,
} from "../../api/sweet.api";

export default function UpdateSweet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sweet, setSweet] = useState<any>({
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    image: "",
    description: "",
  });

  useEffect(() => {
    if (id !== "new") {
      getAllSweetsApi().then((data) => {
        const found = data.find((s: any) => s._id === id);
        if (found) setSweet(found);
      });
    }
  }, [id]);

  const handleSubmit = async () => {
    if (id === "new") {
      await addSweetApi(sweet);
    } else {
      await updateSweetApi(id!, sweet);
    }
    navigate("/admin");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {id === "new" ? "Add Sweet" : "Update Sweet"}
      </Typography>

      <TextField fullWidth label="Name" margin="normal"
        value={sweet.name}
        onChange={(e) => setSweet({ ...sweet, name: e.target.value })}
      />

      <TextField fullWidth label="Category" margin="normal"
        value={sweet.category}
        onChange={(e) => setSweet({ ...sweet, category: e.target.value })}
      />

      <TextField fullWidth label="Price" type="number" margin="normal"
        value={sweet.price}
        onChange={(e) => setSweet({ ...sweet, price: Number(e.target.value) })}
      />

      <TextField fullWidth label="Quantity" type="number" margin="normal"
        value={sweet.quantity}
        onChange={(e) =>
          setSweet({ ...sweet, quantity: Number(e.target.value) })
        }
      />

      <TextField fullWidth label="Image Path" margin="normal"
        placeholder="/assets/sweets/example.jpg"
        value={sweet.image}
        onChange={(e) => setSweet({ ...sweet, image: e.target.value })}
      />

      <TextField fullWidth label="Description" margin="normal" multiline rows={3}
        value={sweet.description}
        onChange={(e) =>
          setSweet({ ...sweet, description: e.target.value })
        }
      />

      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
        Save
      </Button>
    </Container>
  );
}
