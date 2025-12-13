import { apiClient } from "./client";

export const purchaseSweetApi = (
  sweetId: string,
  quantity: number
) =>
  apiClient("/api/purchase", {
    method: "POST",
    body: JSON.stringify({ sweetId, quantity }),
  });
