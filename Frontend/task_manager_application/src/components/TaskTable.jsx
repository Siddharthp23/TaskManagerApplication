import { updateTask, deleteTask } from "../api";

export default function TaskTable({ tasks, refresh }) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.description}</td>

            <td>
              <span style={{
                color: task.status === "completed" ? "green" : "orange"
              }}>
                {task.status}
              </span>
            </td>

            <td>
              <button
                onClick={async () => {
                  await updateTask(task._id);
                  refresh();
                }}
              >
                Complete
              </button>

              <button
                onClick={async () => {
                  await deleteTask(task._id);
                  refresh();
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fafafa",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  row: {
    transition: "0.2s",
  },
  completeBtn: {
    marginRight: "8px",
    padding: "5px 10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};