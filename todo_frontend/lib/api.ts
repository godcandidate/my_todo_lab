import { Todo } from "./types";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined in your .env file.");
}

export async function fetchTodos() {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
}

export async function createTodo(todo: Omit<Todo, '_id'>) {
  const response = await fetch(`${API_BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to create todo');
  return response.json();
}

export async function updateTodo(_id: string, todo: Partial<Todo>) {
  const response = await fetch(`${API_BASE_URL}/${_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to update todo');
  return response.json();
}

export async function deleteTodo(_id: string) {
  const response = await fetch(`${API_BASE_URL}/${_id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete todo');
}

export async function searchTodos(query: string) {
  const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Failed to search todos');
  return response.json();
}