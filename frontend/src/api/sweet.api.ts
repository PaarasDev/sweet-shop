import { apiClient } from "./client";

export const getAllSweetsApi = () =>
  apiClient("/api/sweets");

export const addSweetApi = (data: any) =>
  apiClient("/api/sweets", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateSweetApi = (id: string, data: any) =>
  apiClient(`/api/sweets/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteSweetApi = (id: string) =>
  apiClient(`/api/sweets/${id}`, {
    method: "DELETE",
  });
