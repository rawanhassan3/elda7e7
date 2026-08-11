const API_BASE = import.meta.env.VITE_API_URL || '/api';

export async function checkHealth() {
  const response = await fetch(`${API_BASE}/health`);

  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`);
  }

  return response.json();
}
