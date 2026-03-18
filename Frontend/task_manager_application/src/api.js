const BASE_URL = "https://taskmanagerapplication-yobl.onrender.com";

export const getTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  return res.json();
};

export const createTask = async (task) => {
  await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(task),
  });
};

export const updateTask = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
  });
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};