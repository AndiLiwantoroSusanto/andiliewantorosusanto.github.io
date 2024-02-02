import { ApiResponse } from "../api-response";
import { Category } from "./category";

const API_BASE_URL = process.env.API_BASE_URL; // Assuming you have set this in your .env file

export const fetchCategories = async (): Promise<ApiResponse<Category[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/category`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: ApiResponse<Category[]> = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};