import { Todo } from "./types";
import { getApiBaseUrl } from "./config";

const getApiUrl = () => getApiBaseUrl();

export async function fetchTodos() {
  const response = await fetch(`${getApiUrl()}`);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
}

export async function createTodo(todo: Omit<Todo, '_id'>) {
  const response = await fetch(`${getApiUrl()}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to create todo');
  return response.json();
}

export async function updateTodo(_id: string, todo: Partial<Todo>) {
  const response = await fetch(`${getApiUrl()}/${_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to update todo');
  return response.json();
}

export async function deleteTodo(_id: string) {
  const response = await fetch(`${getApiUrl()}/${_id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete todo');
}

export async function searchTodos(query: string) {
  const response = await fetch(`${getApiUrl()}/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Failed to search todos');
  return response.json();
}